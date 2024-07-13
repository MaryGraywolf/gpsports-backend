import app from './app';
import { connectDB } from '../config/database';
import sequelize from '../config/database';

// Importar associações
import './models/associations';

connectDB();

const port = app.get('port');

sequelize.sync({ force: false }).then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch(error => {
  console.error('Unable to sync the database:', error);
});
