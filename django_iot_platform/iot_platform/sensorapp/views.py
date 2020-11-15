from rest_framework import viewsets, status, mixins
from rest_framework.response import Response


from .serializers import SensorSerializer
from .models import SensorModel

from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
# from rest_framework.decorators import action
# from .permissions import IsOwner


class SensorViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated, ]

    # @action(methods=['get'], detail=True, permission_classes=[IsAuthenticated, ])
    def list(self, request):

        queryset = SensorModel.objects.all()
        serializer = SensorSerializer(queryset, many=True)
        return Response(serializer.data)

    def create(self, request, pk=None):
        serializer = SensorSerializer(data=request.data)

        if serializer.is_valid():

            serializer.save(user=request.user)
            return Response(serializer.data)
        else:
            return Response(serializer.errors,
                            status=status.HTTP_400_BAD_REQUEST)

    # @action(methods=['PUT'], detail=True, permission_classes=[IsOwner, ])
    def update(self, request):
        try:
            sensor = SensorModel.objects.get(id=request.data['id'])

        except:
            return Response({'message': 'invalid key'}, status.HTTP_400_BAD_REQUEST)

        serializer = SensorSerializer(
            instance=sensor, data=request.data)

        if request.user != sensor.user:
            return Response({'message': 'You Have No Permission'}, status.HTTP_403_FORBIDDEN)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request):
        try:
            sensor = SensorModel.objects.get(id=request.data['id'])
        except:
            return Response({'message': 'invalid key'}, status.HTTP_400_BAD_REQUEST)

        if request.user != sensor.user:
            return Response({'message': 'You Have No Permission'}, status.HTTP_403_FORBIDDEN)

        sensor.delete()
        return Response({'messahe': "Successfully Deleted"})
