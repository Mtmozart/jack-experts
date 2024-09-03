import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HomeScreen } from '../pages/home';
import { Layout } from '../layouts';
import LoginScreen from '../pages/auth/login/login';
import RegisterScreen from '../pages/user/register/register';
import { ProfileScreen } from '../pages/user/profile';
import UpdateScreen from '../pages/user/update/update';
export function RoutesPage() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<HomeScreen />} path="/"></Route>
          <Route element={<RegisterScreen />} path="/register"></Route>
          <Route element={<LoginScreen />} path="/login"></Route>
          <Route element={<ProfileScreen />} path="/profile"></Route>
          <Route element={<UpdateScreen />} path="/update"></Route>
        </Route>
      </Routes>
    </Router>
  );
}
