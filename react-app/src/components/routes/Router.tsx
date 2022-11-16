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

export const CustomRouter = () => {
  const loggedIn = useAuthStore().user != null;

  if (loggedIn) return (
    <Routes>
      <Route path='/' element={<Navigate to='/dashboard' />} />
      <Route path='login' element={<Navigate to='/dashboard' />} />
      <Route path='register' element={<Navigate to='/dashboard' />} />

      <Route path='dashboard' element={<DashboardPage />} />
      <Route path='emotion' element={<TrackEmotionPage />} />
      <Route path='track-mood' element={<TrackMoodPage />} />
      <Route path='initial-priorities' element={<InitialPrioritiesPage />} />
      <Route path='new-priority' element={<NewPriorityPage />} />
      <Route path='priorities' element={<PrioritiesPage />} />
      <Route path='daily-summary/:id' element={<DailySummaryPage />} />
    </Routes>
  );

  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='login' element={<LoginPage />} />
      <Route path='register' element={<RegisterPage />} />

      <Route path='dashboard' element={<Navigate to='/login' />} />
      <Route path='emotion' element={<Navigate to='/login' />} />
      <Route path='track-mood' element={<Navigate to='/login' />} />
      <Route path='initial-priorities' element={<Navigate to='/login' />} />
      <Route path='new-priority' element={<Navigate to='/login' />} />
      <Route path='priorities' element={<Navigate to='/login' />} />
      <Route path='daily-summary/:id' element={<Navigate to='/login' />} />
    </Routes>
  );
};
