const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require("../models/listing.js");

const mongo_URL = "mongodb://127.0.0.1:27017/wonderlust";

main()
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main(params) {
  await mongoose.connect(mongo_URL);
}

const initdb = async () => {
  await listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "68f75de9253ffc1b7af8af24",
  }));
  await listing.insertMany(initData.data);
  console.log("data was initialized");
};

initdb();
