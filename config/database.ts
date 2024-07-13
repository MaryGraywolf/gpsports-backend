import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL as string, {
  dialect: 'postgres',
  logging: false,
});

export const connectDB = async () => {
  try{
    await sequelize.authenticate();
    console.log('Database connected');
  } catch (error){
    console.error('Error connecting to database', error);
  }
};

export default sequelize;