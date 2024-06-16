// import packages
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 5000;


// hossainrafi71
// 2zlp9QzuO4cXQiam

main().catch((err) => console.log(err));

async function main() {
  // mongodb connection
  await mongoose.connect(
    "mongodb+srv://hossainrafi71:2zlp9QzuO4cXQiam@veggify.zvv7zdi.mongodb.net/?retryWrites=true&w=majority&appName=veggify"
  );

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

