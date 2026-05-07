import 'dotenv/config';
import app from './app';
import connectDB from './config/database';
import logger from './utils/logger';

const PORT = process.env.PORT || 3002;
async function serverStarter() {
 await connectDB()
 app.listen(PORT, () => {
  logger.info(`server started on port ${PORT}`);
});
  
}
 serverStarter()