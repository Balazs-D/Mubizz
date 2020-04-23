const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Init Middleware


app.use(express.json({ extended: false }));

connectDB();
// app.get('/', (req, res) => res.send('API Running'));

// CORS Enabled
app.use((req, res, next) => {
  res.set('ACCESS-CONTROL-ALLOW-ORIGIN', '*');
  res.set('ACCESS-CONTROL-ALLOW-HEADERS', '*');
  res.set('ACCESS-CONTROL-ALLOW-METHODS', '*');
  next();
});

app.use(express.static(__dirname + '/Client/build'));


// Define Routes
app.use('/api/register', require('./routes/api/register'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/login', require('./routes/api/login'));
app.use('/api/reference', require('./routes/api/reference'));
app.use('/api/offer', require('./routes/api/offer'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
