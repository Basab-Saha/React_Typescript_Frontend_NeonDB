import axios from 'axios';
import { User } from '../types/userTypes';

const api = axios.create({
  baseURL: 'http://localhost:3000',  // Your backend URL
  headers: { 'Content-Type': 'application/json' }
});

export const addUser = async (user: User) => {
  return await api.post('/add-user', user);
};
