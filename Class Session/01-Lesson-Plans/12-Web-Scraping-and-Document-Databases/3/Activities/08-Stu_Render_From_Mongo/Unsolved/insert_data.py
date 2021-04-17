import pymongo

# Setup connection to mongodb
conn = "mongodb://localhost:27017"
client = pymongo.MongoClient(conn)

# Select database and collection to use
db = client.store_inventory
produce = db.produce

produce.insert_many(
    [
    ]
)

print("Data Uploaded!")
