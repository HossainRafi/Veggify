// import packages
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");

  app.get("/", (req, res) => {
    res.send("Veggify Recipe App Server Is Running !!");
  });
}


// server running or not
app.listen(port, () => {
  console.log(`=================================================================================================
    ---------------------------- APP IS LISTENING ON PORT ${port} -----------------------------
================================================================================================= `);
});
