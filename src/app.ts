import express from 'express';
import parkRouter from './routers/park.routers';
const app = express();
const PORT = 5600;
app.use(express.json());

app.use('/api/', parkRouter);

app.listen(PORT, () => {
  console.log(`Listening on port http://localhost:${PORT}`);
});
