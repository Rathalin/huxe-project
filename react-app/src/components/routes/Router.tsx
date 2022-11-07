import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../Dashboard';
import { StrongEmotion } from '../StrongEmotion';
import { Register } from '../Register';
import { Login } from '../Login';
import { useAuthStore } from '../../stores/auth.store';
import { NewMood } from '../NewMood';
import { InitialPriorities } from '../InitialPriorities';
import { NewPriority } from '../NewPriority';
import { Priorities } from '../Priorities';

export const CustomRouter = () => {
  const loggedIn = useAuthStore().user != null;

  return (
    <Routes>
      <Route path='/' element={loggedIn ? <Navigate to='/dashboard' /> : <Login />} />
      <Route path='login' element={loggedIn ? <Navigate to='/dashboard' /> : <Login />} />
      <Route path='register' element={loggedIn ? <Navigate to='/dashboard' /> : <Register />} />
      <Route path='dashboard' element={!loggedIn ? <Navigate to='/login' /> : <Dashboard />} />
      <Route path='emotion' element={<StrongEmotion />} />
      <Route path='login' element={loggedIn ? <Navigate to='/dashboard' /> : <Login />}
      />
      <Route path='newMood' element={!loggedIn ? <Navigate to='/login' /> : <NewMood />}
      />
      <Route path='initialPriorities' element={!loggedIn ? <Navigate to='/login' /> : <InitialPriorities />}
      />
      <Route path='newPriority' element={!loggedIn ? <Navigate to='/login' /> : <NewPriority />}/>
      <Route path='priorities' element={!loggedIn ? <Navigate to='/login' /> : <Priorities />}
      />
      <Route path='register' element={loggedIn ? <Navigate to='/dashboard' /> : <Register />}
      />
    </Routes>
  );
};
