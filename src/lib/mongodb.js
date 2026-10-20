import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  console.warn("⚠️ MONGODB_URI is not set in environment variables.");
}

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri || "mongodb://localhost:27017/bazardor", options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri || "mongodb://localhost:27017/bazardor", options);
  clientPromise = client.connect();
}

export default clientPromise;
