const express = require('express');
const connectDB = require('./config/db')

const app = express();


//Init Middleware

app.use(express.json({extended : false}))

connectDB()
app.get('/', (req, res) => res.send('API Running'))

// Define Routesroutes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`))