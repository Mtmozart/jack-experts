import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { HomeScreen } from '../pages/home';
import { Layout } from '../layouts';
export function RoutesPage() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<HomeScreen />} path="/"></Route>
        </Route>
      </Routes>
    </Router>
  );
}
