// import packages
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const dotenv = require("dotenv").config();

const corsOptions = {
  origin: ["https://veggify-ct6h.vercel.app", "http://localhost:5173"],
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));

// connecting mongodb
async function main() {
  await mongoose.connect(process.env.DATABASE_URI);

  app.get("/", (req, res) => {
    res.send("Veggify Recipe App Server Is Running !!");
  });
}

// mongodb connected or not
main()
  .then(() =>
    console.log(`============ MongoDB Connected Successfully ============`)
  )
  .catch((err) => console.log(err));

  
// routes
const ItemRoutes = require("./src/routes/itemRoute");
const CategoryRoutes = require("./src/routes/categoryRoute");

app.use("/api", ItemRoutes);
app.use("/api", CategoryRoutes);

// server running or not
app.listen(port, () => {
  console.log(`============ APP IS LISTENING ON PORT ${port} ============`);
});
