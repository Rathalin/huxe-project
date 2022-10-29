import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../Dashboard';
import { Register } from '../Register';
import { Login } from '../Login';

export const CustomRouter = () => {

  return(

    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  )
}
