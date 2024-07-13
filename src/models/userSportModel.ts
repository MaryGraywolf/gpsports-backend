import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/database';

class UserSport extends Model {}

UserSport.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    sportId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'sports',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    tableName: 'UserSports',
    timestamps: false,
  }
);

export default UserSport;
