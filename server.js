const express = require('express')
const routes = require('./routes');
// const thoughtRoutes = require('./routes/thoughtRoutes');

const db = require('./config/connection')

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`http://localhost:3001`);
  });
});
