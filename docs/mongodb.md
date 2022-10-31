- Find queries: https://www.mongodb.com/developer/languages/javascript/node-crud-tutorial/?_ga=2.172347555.1456210778.1667163680-861193317.1663721544#create
- Aggregate queries: https://www.mongodb.com/developer/languages/javascript/node-aggregation-framework/?_ga=2.27046845.1456210778.1667163680-861193317.1663721544
- online tester: https://mongoplayground.net/

# Generic Caller
```javascript
async function main() {

  const uri =
    "mongodb+srv://--:--@cluster0.6j5j1zz.mongodb.net/?retryWrites=true&w=majority";

  const client = new MongoClient(uri);

  try {
    // Connect to the MongoDB cluster
    await client.connect();
    // make DB calls

  } finally {
    // Close the connection to the MongoDB cluster
    await client.close();
  }
}

main().catch(console.error);
```
# Create
## Create 1
```javascript
await createListing(client, {
  name: "Lovely Loft",
  summary: "A charming loft in Paris",
  bedrooms: 1,
  bathrooms: 1,
});
//
async function createListing(client, newListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .insertOne(newListing);
  console.log(
    `New listing created with the following id: ${result.insertedId}`
  );
}
```

## Create many
```javascript
await createMultipleListings(client, [
  {
    name: "Infinite Views",
    summary: "Modern home with infinite views from the infinity pool",
    property_type: "House",
    bedrooms: 5,
    bathrooms: 4.5,
    beds: 5,
  },
  {
    name: "Private room in London",
    property_type: "Apartment",
    bedrooms: 1,
    bathroom: 1,
  },
  {
    name: "Beautiful Beach House",
    summary:
      "Enjoy relaxed beach living in this house with a private beach",
    bedrooms: 4,
    bathrooms: 2.5,
    beds: 7,
    last_review: new Date(),
  },
  
  function caller
  async function createMultipleListings(client, newListings) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .insertMany(newListings);

  console.log(
    `${result.insertedCount} new listings created with the following id(s):`
  );
  console.log(result.insertedIds);
}
```
# Find()
## Find one
```javascript
await findOneListingByName(client, "Infinite Views");
//
async function findOneListingByName(client, nameOfListing) {
  const result = await client
    .db("sample_airbnb")
    .collection("listingsAndReviews")
    .findOne({ name: nameOfListing });

  if (result) {
    console.log(
      `Found a listing in the collection with the name '${nameOfListing}':`
    );
    console.log(result);
  } else {
    console.log(`No listings found with the name '${nameOfListing}'`);
  }
}
```

## Find many
```javascript
const cursor = client.db("sample_airbnb").collection("listingsAndReviews").find(
      {
          bedrooms: { $gte: minimumNumberOfBedrooms },
          bathrooms: { $gte: minimumNumberOfBathrooms }
      }
  ).sort({ last_review: -1 })
  .limit(maximumNumberOfResults);    
```

# Aggregate search

