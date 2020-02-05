import express from 'express';
const app = express();
const port = 8080;
import { Crud } from './controllers/crud'
const _crud = new Crud();
app.get('/', (req, res) => {
    res.json({ status: 'success', firebase: _crud.go });
});

app.get('/insert-data', (req, res) => {
  res.json({ status: 'success', firebase: _crud.insertData({username: "joel"}) });
});


app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
