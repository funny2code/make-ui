const createError = require("http-errors");
const express = require("express");
const session = require("express-session");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const indexRouter = require("./routes/index");
const themesRouter = require("./routes/themes");
const randomRouter = require("./routes/random");
const randomViewRouter = require("./routes/randomview");
const randomEditor = require("./routes/remix-editor");
const userThemesRouter = require("./routes/userthemes");
const viewRouter = require("./routes/view");
const remixViewRouter = require("./routes/remix-view");
const viewUserRouter = require("./routes/viewuser");
const getRouter = require("./routes/get");
const saveRouter = require("./routes/save");
const saveRemixRouter = require("./routes/saveoraddremix");
const saveUserRouter = require("./routes/saveuser");
const downloadRouter = require("./routes/download");
const loginRouter = require("./routes/login");
const logOutRouter = require("./routes/logout");
const signupRouter = require("./routes/signup");
const addThemeRouter = require("./routes/addtheme");
const figmaRouter = require("./routes/figma");
const openAiRouter = require("./routes/openAi");

const app = express();

const oneMonth = 31000 * 60 * 60 * 24;
app.use(
  session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneMonth },
    resave: false,
  })
);
app.use(cors({ origin: "*" }));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("dev"));
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/themes", themesRouter);
app.use("/remix", randomRouter);
app.use("/remix-editor", randomEditor);
app.use("/remix", async (req, res) => {
  res.redirect("/remix/6306f8e7db2cbec8c440f780?page=index");
});
app.use("/remixview", randomViewRouter);
app.use("/users", userThemesRouter);
app.use("/view", viewRouter);
app.use("/remix-view", remixViewRouter);
app.use("/view/users", viewUserRouter);
app.use("/get", getRouter);
app.use("/save", saveRouter);
app.use("/save-remix", saveRemixRouter);
app.use("/save/users", saveUserRouter);
app.use("/login", loginRouter);
app.use("/logout", logOutRouter);
app.use("/signup", signupRouter);
app.use("/download", downloadRouter);
app.use("/add", addThemeRouter);
app.use("/figma", figmaRouter);
app.use("/openai", openAiRouter);

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
