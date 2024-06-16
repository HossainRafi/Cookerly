const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`=================================================================================================
    ---------------------------- APP IS LISTENING ON PORT ${port} -----------------------------
================================================================================================= `);
});
