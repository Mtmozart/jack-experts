import './styles/global.scss';
import { RoutesPage } from './routes';
import { AuthProvider } from './context/Auth';

function App() {
  return (
    <AuthProvider>
      <RoutesPage />
    </AuthProvider>
  );
}
export default App;
