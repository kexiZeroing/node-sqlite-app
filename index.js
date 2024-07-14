import express from 'express';
import bodyParser from 'body-parser';
import db from './connect.js';

const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200);
  res.send('Service is online');
});

app.get('/api', (req, res) => {
  const sql = 'SELECT * FROM products';
  let data = { products: [] };
  
  res.set('content-type', 'application/json');
  try {
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      rows.forEach((row) => {
        data.products.push({ id: row.id, name: row.name, description: row.description });
      });
      res.send(JSON.stringify(data));
    });
  } catch (err) {
    console.log(err.message);
    res.status(500);
    res.send(`{"code": 500, "msg": "${err.message}"}`);
  }
})

app.post('/api', (req, res) => {
  const sql = 'INSERT INTO products(name, description) VALUES (? , ?)';
  let newId;

  res.set('content-type', 'application/json');
  try {
    db.run(sql, [req.body.name, req.body.description], function (err) {
      if (err) {
        throw err;
      }
      
      newId = this.lastID; // built-in property that provides the auto incremented ID
      res.status(201);
      let data = { status: 201, msg: `product id ${newId} created.` };
      res.send(JSON.stringify(data));
    });
  } catch (err) {
    console.log(err.message);
    res.status(500);
    res.send(`{"code": 500, "msg": "${err.message}"}`);
  }
})

app.delete('/api', (req, res) => {
  const sql = 'DELETE FROM products WHERE id=?';
  
  res.set('content-type', 'application/json');
  try {
    db.run(sql, [req.query.id], function (err) {
      if (err) {
        throw err;
      }

      // built-in property that provides how many records are affected
      if (this.changes === 1) {
        // one item deleted
        res.status(200);
        res.send(`{"msg": "Product ${req.query.id} was deleted."}`);
      } else {
        res.status(200);
        res.send(`{"msg": "No operation needed."}`);
      }
    });
  } catch (err) {
    console.log(err.message);
    res.status(500);
    res.send(`{"code": 500, "msg": "${err.message}"}`);
  }
})

app.listen(3000, (err) => {
  if (err) {
    console.log('ERROR:', err.message);
  }
  console.log('LISTENING on port 3000');
});
