const express = require('express')
const userRoutes = require('./routes/userRoutes');
// const thoughtRoutes = require('./routes/thoughtRoutes');

const db = require('./config/connection')

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRoutes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`http://localhost:3001`);
  });
});
