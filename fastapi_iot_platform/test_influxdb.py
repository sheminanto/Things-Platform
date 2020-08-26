from influxdb import InfluxDBClient
import time

start = time.time()

# using Http

client = InfluxDBClient(host='127.0.0.1', username="root",
                        password="root", port=8086, database="test")
dbs = client.get_list_database()
print(client.get_list_users())
stop = time.time()
print(dbs)

print(f"time taken : {stop -start}")
