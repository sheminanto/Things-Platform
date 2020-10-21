from math import sqrt
import matplotlib.pyplot as plt


#Euclidean distance b/w two vectors
def euclidean_dist(row1, row2):
    distance = 0.0
    for i in range(len(row2) - 1):
        distance += (row1[i] - row2[i])**2
    return sqrt(distance)


#Locating similar neighbours
def get_neighbours(train, test_row, num_neighbours):
    distances = list()
    for train_row in train:
        dist = euclidean_dist(test_row, train_row)
        distances.append((train_row, dist))
    distances.sort(key=lambda tup: tup[1])
    neighbours = list()
    for i in range(num_neighbours):
        neighbours.append(distances[i][0])
    return neighbours


#Prediction
def predict(train, test_row, num_neighbours):
    neighbours = get_neighbours(train, test_row, num_neighbours)
    output_values = []
    for i in range(len(neighbours)):
        output_values.append(neighbours[i][-1])
    prediction = max(set(output_values), key=output_values.count)
    return prediction


#dataset
t7 = [[0.0, 12.62075468696685, 1], [0.0, 2.1422404036883, 1],
      [0.0, 5.847436127248756, 1], [0.0, 54.847436127248756, 1],
      [0.0, 51.737063147901274, 1], [0.0, 53.176279168108486, 1],
      [0.0, 53.17757209883375, 1], [0.0, 51.39600011716364, 1],
      [0.0, 50.1422404036883, 1], [0.0, 52.62075468696685, 1],
      [0.0, 50.755869670490256, 1], [0.0, 50.90377594831744, 1],
      [0.0, 54.37412841034598, 1], [0.0, 54.011363929280066, 1],
      [0.0, 51.42063736539424, 1], [0.0, 51.19243386833373, 1],
      [0.0, 51.52077585359514, 1], [0.0, 53.06655235966885, 1],
      [0.0, 35.20467413015333, 0], [0.0, 34.70137979254797, 0],
      [0.0, 34.95913097899976, 0], [0.0, 33.51386347211003, 0],
      [0.0, 34.90578034838777, 0], [0.0, 36.45967908517987, 0],
      [0.0, 35.1935173747592, 0], [0.0, 34.76700804925268, 0],
      [0.0, 36.959391693339946, 0], [0.0, 35.3153831427746, 0],
      [0.0, 34.333809897886795, 0], [0.0, 35.02262353932812, 0],
      [0.0, 32.60877101182937, 0], [0.0, 36.1824880193223, 0],
      [0.0, 32.868404588480374, 0], [0.0, 26.55049568429958, 0],
      [0.0, 26.636575103942395, 0], [0.0, 29.64518032548993, 0],
      [0.0, 29.502205996775714, 0], [0.0, 29.952169396161153, 0],
      [0.0, 25.954059914782555, 0], [0.0, 26.16682144559383, 0],
      [0.0, 29.967474528839695, 0], [0.0, 25.14555015549128, 0],
      [0.0, 28.623722270136415, 0], [0.0, 27.167068819202644, 0],
      [0.0, 27.580718395307567, 0], [0.0, 28.68029545626884, 0],
      [0.0, 28.45622913449376, 0], [0.0, 25.188981926334222, 0]]
t6 = [[0.0, 2.4059304724659], [0.0,
                               50.4059304724659], [0.0, 54.09134070490489],
      [0.0, 54.96528529764258], [0.0, 50.575138478266695],
      [0.0, 50.00529098784652], [0.0, 54.157910727574524],
      [0.0, 44.268021838685635], [0.0, 52.471127979293755],
      [0.0, 51.88289209065183], [0.0, 52.14071350309344],
      [0.0, 53.55142019995792], [0.0, 52.516295523242725],
      [0.0, 54.41582960955924], [0.0, 50.873845144069094],
      [0.0, 51.45922485640262], [0.0, 54.62653252902867],
      [0.0, 35.790521145739795], [0.0, 34.79385667442588],
      [0.0, 33.68594425049566], [0.0, 32.67619393600458],
      [0.0, 33.04407029929096], [0.0, 32.523221351953126],
      [0.0, 34.74683179822556], [0.0, 32.98873920990137],
      [0.0, 32.80966768394495], [0.0, 36.39322454244312],
      [0.0, 34.5374278668484], [0.0, 33.0724966999557],
      [0.0, 36.24449781885768], [0.0, 36.2246154057399],
      [0.0, 33.46929043161506], [0.0, 29.31014098117009],
      [0.0, 29.702512985615787], [0.0, 25.87098615906068],
      [0.0, 25.982768149354712], [0.0, 27.102110477588766],
      [0.0, 27.785237952408664], [0.0, 27.201529235930067],
      [0.0, 27.18252911510451], [0.0, 29.040426967752758],
      [0.0, 26.776218764661735], [0.0, 27.50501791678857],
      [0.0, 28.812128917199324], [0.0, 29.03394050478254],
      [0.0, 27.531853013570938], [0.0, 27.040593018802873]]


def classify(dataset):
    normal_x = []
    normal_y = []
    anomalous_x = []
    anomalous_y = []
    for i in range(len(dataset)):
        if dataset[i][-1] == 1:
            anomalous_x.append(dataset[i][0])
            anomalous_y.append(dataset[i][1])
        else:
            normal_x.append(dataset[i][0])
            normal_y.append(dataset[i][1])
    return normal_x, normal_y, anomalous_x, anomalous_y


classified_t6 = t6
for i in range(len(t6)):
    prediction = predict(t7, t6[i], 5)
    # print(t6[i], prediction)
    classified_t6[i].append(prediction)

classification = classify(t7)
normal_train_x = classification[0]
normal_train_y = classification[1]
anomalous_train_x = classification[2]
anomalous_train_y = classification[3]

classification = classify(classified_t6)
normal_test_x = classification[0]
normal_test_y = classification[1]
anomalous_test_x = classification[2]
anomalous_test_y = classification[3]
count = 0
for i in range(len(classified_t6)):
    if classified_t6[i][2] == 1:
        count += 1
print(count)
#Plotting
# def plot(i,title,normal_x,normal_y,anomalous_x,anomalous_y)
plt.figure(1)
plt.title("Labeled Dataset")
nt1 = plt.scatter(normal_train_x, normal_train_y, label='Normal')
at1 = plt.scatter(anomalous_train_x, anomalous_train_y, label='Outlier')
plt.legend((nt1, at1), ('Normal', 'Outlier'))

plt.figure(2)
plt.title("Test Data")
plt.scatter(normal_test_x, normal_test_y, color='blue')
plt.scatter(anomalous_test_x, anomalous_test_y, color='blue')

plt.figure(3)
plt.title("After Classification")
nt2 = plt.scatter(normal_test_x, normal_test_y)
at2 = plt.scatter(anomalous_test_x, anomalous_test_y)
plt.legend((nt2, at2), ('Normal', 'Outlier'))
plt.show()