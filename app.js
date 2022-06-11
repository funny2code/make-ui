const createError = require('http-errors');
const express = require('express');
const session = require('express-session');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

const indexRouter = require('./routes/index');
const themesRouter = require('./routes/themes');
const randomRouter = require('./routes/random');
const userThemesRouter = require('./routes/userthemes');
const viewRouter = require('./routes/view');
const viewUserRouter = require('./routes/viewuser');
const getRouter = require('./routes/get');
const saveRouter = require('./routes/save');
const saveUserRouter = require('./routes/saveuser');
const downloadRouter = require('./routes/download');
const loginRouter = require('./routes/login');
const logOutRouter = require('./routes/logout');
const signupRouter = require('./routes/signup');
const addThemeRouter = require('./routes/addtheme');

const app = express();

const oneMonth = 31000 * 60 * 60 * 24;
app.use(session({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized: true,
    cookie: { maxAge: oneMonth },
    resave: false
}));
app.use(cors({origin: '*'}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/themes', themesRouter);
app.use('/remix', randomRouter);
app.use('/remix', async (req,res,next) => { res.redirect('/remix/62956f8717d82f2971e5c4fc?page=Home%20Page') })
app.use('/users', userThemesRouter);
app.use('/view', viewRouter);
app.use('/view/users', viewUserRouter);
app.use('/get', getRouter);
app.use('/save', saveRouter);
app.use('/save/users', saveUserRouter);
app.use('/login', loginRouter);
app.use('/logout', logOutRouter);
app.use('/signup', signupRouter);
app.use('/download', downloadRouter);
app.use('/add', addThemeRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
