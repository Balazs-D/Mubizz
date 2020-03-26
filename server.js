const express = require('express');
const connectDB = require('./config/db')

const app = express();


//Init Middleware

app.use(express.json({ extended: false }))
// connect Database
connectDB()
app.get('/', (req, res) => res.send('API Running'))

// Define Routes
app.use('/api/register', require('./routes/api/register'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/login', require('./routes/api/login'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`))