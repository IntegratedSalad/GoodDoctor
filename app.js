import express from 'express';
const app = express();

app.use(express.json());
app.use(express.static('./static'))
app.set("view engine", "ejs");
app.use(express.json());

/* All routes 
 * TODO: Think about placing the code for all endpoints in a separate module(s)
 *
 */

app.get('/', (req, res) => {
  res.render('index');
})

app.post('/register', (req, res) => {
  res.send('Add Doctor!');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving GoodDoctor on port:${port}`);
})