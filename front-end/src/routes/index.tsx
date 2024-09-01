import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HomeScreen } from '../pages/home';
import { Layout } from '../layouts';
<<<<<<< HEAD
import RegisterScreen from '../pages/auth/register/register';
=======
>>>>>>> 5a5632497bd024695ab4d0c2b27f7ee350292dea
export function RoutesPage() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<HomeScreen />} path="/"></Route>
<<<<<<< HEAD
          <Route element={<RegisterScreen />} path="/register"></Route>
=======
>>>>>>> 5a5632497bd024695ab4d0c2b27f7ee350292dea
        </Route>
      </Routes>
    </Router>
  );
}
