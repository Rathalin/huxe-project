import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardPage } from './DashboardPage';
import { TrackEmotionPage } from './TrackEmotionPage';
import { RegisterPage } from './RegisterPage';
import { LoginPage } from './LoginPage';
import { useAuthStore } from '../../stores/auth.store';
import { TrackMoodPage } from './TrackMoodPage';
import { InitialPrioritiesPage } from './InitialPrioritiesPage';
import { NewPriorityPage } from './NewPriorityPage';
import { PrioritiesPage } from './PrioritiesPage';
import { DailySummaryPage } from './DailySummaryPage';
import { UploadTestPage } from './UploadTestPage';

export const CustomRouter = () => {
  const loggedIn = useAuthStore().user != null;

  return (
    <Routes>
      <Route path='/' element={loggedIn ? <Navigate to='/dashboard' /> : <LoginPage />} />
      <Route path='login' element={loggedIn ? <Navigate to='/dashboard' /> : <LoginPage />} />
      <Route path='register' element={loggedIn ? <Navigate to='/dashboard' /> : <RegisterPage />} />
      <Route path='dashboard' element={!loggedIn ? <Navigate to='/login' /> : <DashboardPage />} />
      <Route path='emotion' element={!loggedIn ? <Navigate to='/login' /> : <TrackEmotionPage />} />
      <Route path='login' element={loggedIn ? <Navigate to='/dashboard' /> : <LoginPage />} />
      <Route path='track-mood' element={!loggedIn ? <Navigate to='/login' /> : <TrackMoodPage />} />
      <Route path='initial-priorities' element={!loggedIn ? <Navigate to='/login' /> : <InitialPrioritiesPage />} />
      <Route path='new-priority' element={!loggedIn ? <Navigate to='/login' /> : <NewPriorityPage />} />
      <Route path='priorities' element={!loggedIn ? <Navigate to='/login' /> : <PrioritiesPage />} />
      <Route path='register' element={loggedIn ? <Navigate to='/dashboard' /> : <RegisterPage />} />
      <Route path='/daily-summary/:id' element={!loggedIn ? <Navigate to='/login' /> : <DailySummaryPage />} />

      <Route path='/test-upload' element={<UploadTestPage />} />
    </Routes>
  );
};
