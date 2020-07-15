const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bookRouter = require("./router");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api", bookRouter);
app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});
async function start() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:J1yFuW2lCqEm33of@cluster0-y4oel.mongodb.net/books?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );
    app.listen(3001, function () {
      console.log("Example app listening on port 3000!");
    });
  } catch (e) {}
}
start();
