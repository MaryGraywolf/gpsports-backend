import User from './userModel';
import Sport from './sportModel';
import UserSport from './userSportModel';

// Definindo a associação N:M entre User e Sport usando a tabela de junção UserSports
User.belongsToMany(Sport, { through: UserSport });
Sport.belongsToMany(User, { through: UserSport });
