import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HomeScreen } from '../pages/home';
import { Layout } from '../layouts';
import RegisterScreen from '../pages/auth/register/register';
import LoginScreen from '../pages/auth/login/login';
export function RoutesPage() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<HomeScreen />} path="/"></Route>
          <Route element={<RegisterScreen />} path="/register"></Route>
          <Route element={<LoginScreen />} path="/login"></Route>
        </Route>
      </Routes>
    </Router>
  );
}
