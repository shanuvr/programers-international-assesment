import 'dotenv/config';
import express from 'express';
import { errorHandler } from './middleware/errorHandler';
import morgan from 'morgan'
import router from './routes/Router';
import cors from 'cors'

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json()); 
app.use("/uploads", express.static("uploads"));
app.use(morgan("dev"))

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'User Service' });
});
app.use('/',router)
app.use(errorHandler)

export default app;
// Trigger restart
