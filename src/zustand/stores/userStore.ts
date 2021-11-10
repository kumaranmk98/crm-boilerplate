import create from 'zustand';
import userReducer from '../reducers/userReducer';

const userStore = create((set) => ({
  id: '',
  name: '',
  userReducer: userReducer(set)
}));
global.store = userStore;
export default userStore;
