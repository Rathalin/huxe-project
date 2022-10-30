import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../Dashboard';
import { StrongEmotion } from '../StrongEmotion';
import { Register } from '../Register';
import { Login } from '../Login';
import { useStore } from '../../store/useStore';

export const CustomRouter = () => {
  const { loggedIn } = useStore();

  return (

    <Routes>
      <Route path='/' element={loggedIn ? <Navigate to='/dashboard' /> : <Login />}
      />
      <Route path='dashboard' element={!loggedIn ? <Navigate to='/login' /> : <Dashboard />} />
      <Route path='emotion' element={<StrongEmotion />} />
      <Route path='login' element={loggedIn ? <Navigate to='/dashboard' /> : <Login />}
      />
      <Route path='register' element={loggedIn ? <Navigate to='/dashboard' /> : <Register />}
      />
    </Routes>
  );
};
