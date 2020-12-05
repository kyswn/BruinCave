var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var aptRouter = require("./routes/apt");
var userinfoRouter = require("./routes/userinfo");
var preferenceRouter = require("./routes/preferences");
var ownershipRouter = require("./routes/ownership");
var recommendRouter = require("./routes/recommend");
var app = express();
var cors = require("cors");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome." });
});
app.use("/users", usersRouter);
app.use("/apt", aptRouter);
app.use("/userinfo", userinfoRouter);
app.use("/preferences", preferenceRouter);
app.use("/ownership", ownershipRouter);
app.use("/recommend", recommendRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
