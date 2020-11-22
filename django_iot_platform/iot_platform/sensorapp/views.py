from rest_framework import viewsets, status, mixins
from rest_framework.response import Response


from .serializers import SensorSerializer, SensorDataSerializer, SensorUpdateSerializer
from .models import SensorModel, SensorDataModel

from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

# from rest_framework.decorators import action
# from .permissions import IsOwner
from django.shortcuts import get_list_or_404, get_object_or_404


class SensorViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated, ]

    # @action(methods=['get'], detail=True, permission_classes=[IsAuthenticated, ])
    def list(self, request):

        queryset = SensorModel.objects.filter(user=request.user)
        serializer = SensorSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request, pk=None):
        serializer = SensorSerializer(data=request.data)

        if serializer.is_valid():

            if request.data['root'] == request.data['parent'] == None:
                serializer.save(user=request.user,
                                is_root=True, is_parent=False)
                return Response(serializer.data)
            try:
                root = serializer.validated_data.get('root')
                if root.is_root != True:
                    return Response({'detail': 'Invalid Root'}, status=status.HTTP_400_BAD_REQUEST)

                parent = serializer.validated_data.get('parent')

                if parent != root and parent.root != root:
                    return Response({'detail': 'Parent and child should have same root'}, status=status.HTTP_400_BAD_REQUEST)
                if parent.is_parent != True:
                    parent.is_parent = True
                    parent.save()
            except:
                return Response({'detail': 'parent/root is null'}, status=status.HTTP_400_BAD_REQUEST)

            serializer.save(user=request.user, is_parent=False, is_root=False)
            return Response(serializer.data)
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)

    # @action(methods=['patch'], detail=True, permission_classes=[IsOwner, ])
    def update(self, request):
        '''
        Here validation is not working properly
        Create a new serializer serializers.Serializer for validation without connection with model
        check for if 'id' is present and should return 'This field cannot be empty'
        check for invalid parameters ****users can use to find the parameters from the error message ** is this an issue
        '''

        try:
            id = request.data['id']
        except:
            return Response({'detail': 'invalid key'}, status.HTTP_400_BAD_REQUEST)

        sensor = get_object_or_404(SensorModel, id=id)

        if request.user != sensor.user:
            return Response({'detail': 'You Have No Permission'}, status.HTTP_403_FORBIDDEN)

        serializer = SensorUpdateSerializer(
            instance=sensor, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(status.HTTP_204_NO_CONTENT)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request):

        try:
            id = request.GET['id']
        except:
            return Response({'detail': 'invalid key'}, status.HTTP_400_BAD_REQUEST)
        sensor = get_object_or_404(SensorModel, id=id)

        if request.user != sensor.user:
            return Response({'detail': 'You Have No Permission'}, status.HTTP_403_FORBIDDEN)

        sensor.delete()

        if SensorModel.objects.filter(parent=sensor.parent_id).exists() != True:
            if sensor.is_root == False:
                parent = sensor.parent
                parent.is_parent = False
                parent.save()

        return Response({'detail': "Successfully Deleted"})


class SensorDataViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated, ]

    def list(self, request):
        try:
            sensor = request.GET['sensor']
        except:
            return Response({'detail': 'Sensor Id Not Provided'}, status.HTTP_400_BAD_REQUEST)

        queryset = get_list_or_404(SensorDataModel.objects.filter(
            sensor__user=request.user, sensor=sensor))

        serializer = SensorDataSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request):
        '''
        Try to move object level permission to serializer or **Find appropriate solution **may be permission_classes

        '''

        serializer = SensorDataSerializer(data=request.data)

        try:
            SensorModel.objects.get(
                id=request.data['sensor'], user=request.user, is_parent=False)

        except:
            return Response({'detail': 'Invalid sensor / No permission / Sensor is parent'}, status.HTTP_403_FORBIDDEN)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)
