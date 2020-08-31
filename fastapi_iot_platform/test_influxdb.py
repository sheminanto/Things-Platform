from influxdb import InfluxDBClient
import time

start = time.time()


client = InfluxDBClient(host='127.0.0.1', username="root",
                        password="root", port=8086, database="test")
# dbs = client.get_list_database()
# users = client.get_list_users()
json_body = [
    {
        "measurement": "cpu_load_short",
        "tags": {
            "sensor_id": "001",
            "user_id": "001"

        },

        "fields": {
            "value": 10.01
        }
    }
]
# client.write_points(json_body)

query = 'select value from cpu_load_short;'
query_where = 'select Int_value from cpu_load_short where host=$host;'
bind_params = {'host': 'server01'}

result = client.query(query)
print(f"length : {len(result)}")
print(type(result))
for i in list(result.get_points(measurement="cpu_load_short")):
    print(i)


stop = time.time()
print(f"time taken : {stop -start}")
