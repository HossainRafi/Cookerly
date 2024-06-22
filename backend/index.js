// import packages
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

// hossainrafi71
// 2zlp9QzuO4cXQiam

// middleware
app.use(express.json());
app.use(cors());

// connecting mongodb
async function main() {
  await mongoose.connect(
    "mongodb+srv://hossainrafi71:2zlp9QzuO4cXQiam@veggify.zvv7zdi.mongodb.net/veggify?retryWrites=true&w=majority&appName=veggify"
  );

  app.get("/", (req, res) => {
    res.send("Veggify Recipe App Server Is Running !!");
  });
}

// mongodb connected or not
main()
  .then(() =>
    console.log(`=================================================================================================
    --------------------------- MongoDB Connected Successfully -----------------------------
================================================================================================= `)
  )
  .catch((err) => console.log(err));

// routes
const ItemRoutes = require("./src/routes/itemRoute");
const CategoryRoutes = require("./src/routes/categoryRoute");

app.use("/api", ItemRoutes);
app.use("/api", CategoryRoutes);

// server running or not
app.listen(port, () => {
  console.log(`=================================================================================================
    ---------------------------- APP IS LISTENING ON PORT ${port} -----------------------------
================================================================================================= `);
});
