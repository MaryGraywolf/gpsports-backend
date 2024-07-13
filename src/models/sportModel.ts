import { DataTypes, Model } from 'sequelize';
import sequelize from '../../config/database';

// Definir a interface SportAttributes
export interface SportAttributes {
  id: number;
  name: string;
}

class Sport extends Model<SportAttributes> implements SportAttributes {
  public id!: number;
  public name!: string;
}

Sport.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'sports',
    timestamps: false,
  }
);

export default Sport;
