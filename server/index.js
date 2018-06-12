const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');

const keys = require('./config/keys');

require('./models/mongodb/user');
require('./services/passport');
// require('./models/sql');

mongoose
  .connect(keys.mongoURI)
  .then(() => {
    console.log('Database connection successful');
  })
  .catch(error => console.log('Unable to connect', error));

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(
  cookieSession({
    name: 'gdsprint',
    maxAge: 8 * 60 * 60 * 1000, // 8 hour during dev
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));

require('./routes/authRoutes')(app);
require('./routes/printerRoutes')(app);
require('./routes/tokenRoutes')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5060;

app.listen(PORT);
