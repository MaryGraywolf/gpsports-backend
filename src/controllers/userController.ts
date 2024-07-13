import { Request, Response } from 'express';
import { registerStepOneSchema, registerStepTwoSchema, registerStepThreeSchema } from '../utils/validation';
import User, { UserAttributes } from '../models/userModel';
import Sport from '../models/sportModel';

const tempUsers: { [key: string]: Partial<UserAttributes> } = {};

export const registerStepOne = async (req: Request, res: Response) => {
  const validation = registerStepOneSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ errors: validation.error.errors });
  }

  const { email, password } = req.body;
  tempUsers[email] = { email, password };
  res.status(200).json({ message: 'Step one completed' });
};

export const registerStepTwo = async (req: Request, res: Response) => {
  const validation = registerStepTwoSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ errors: validation.error.errors });
  }

  const { email, name, surname, birthday, gender, ddd, phone, profile_picture } = req.body;
  if (!tempUsers[email]) {
    return res.status(400).json({ message: 'User not found. Please complete step one first.' });
  }

  tempUsers[email] = {
    ...tempUsers[email],
    name,
    surname,
    birthday,
    gender,
    ddd,
    phone,
    profile_picture
  };
  res.status(200).json({ message: 'Step two completed' });
};

export const registerStepThree = async (req: Request, res: Response) => {
  const validation = registerStepThreeSchema.safeParse(req.body);
  if (!validation.success) {
    return res.status(400).json({ errors: validation.error.errors });
  }

  const { email, favoriteSports } = req.body;
  if (!tempUsers[email]) {
    return res.status(400).json({ message: 'User not found. Please complete steps one and two first.' });
  }

  const userData = tempUsers[email];
  const user = await User.create(userData);

  if (favoriteSports && favoriteSports.length > 0) {
    const sports = await Sport.findAll({ where: { id: favoriteSports } });
    await user.setSports(sports);
  }

  delete tempUsers[email];

  res.status(200).json({ message: 'Registration completed', user });
};
