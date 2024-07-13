import { DataTypes, Model, Optional } from 'sequelize';
import sequelize from '../../config/database';

// Definir a interface UserAttributes
export interface UserAttributes {
  id: number;
  email: string;
  password: string;
  name?: string;
  surname?: string;
  birthday?: Date;
  gender?: string;
  ddd?: number;
  phone?: number;
  profile_picture?: string;
  created_at?: Date;
  updated_at?: Date;
}

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public email!: string;
  public password!: string;
  public name?: string;
  public surname?: string;
  public birthday?: Date;
  public gender?: string;
  public ddd?: number;
  public phone?: number;
  public profile_picture?: string;
  public created_at?: Date;
  public updated_at?: Date;

  // Declaração de métodos de associação
  public setSports!: (sports: any[]) => Promise<void>;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
    },
    surname: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.DATE,
    },
    gender: {
      type: DataTypes.STRING,
    },
    ddd: {
      type: DataTypes.INTEGER,
    },
    phone: {
      type: DataTypes.INTEGER,
    },
    profile_picture: {
      type: DataTypes.TEXT,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: false,
  }
);

export default User;
