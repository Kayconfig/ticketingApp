import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/api/users/currentuser', (req, res) => {
  res.json({ msg: 'Working on currentuser' });
});

app.listen(3000, () => console.log('auth listening on port 3000!!'));
