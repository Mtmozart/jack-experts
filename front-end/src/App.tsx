import './styles/global.scss';
import { RoutesPage } from './routes';
import { AuthProvider } from './context/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <AuthProvider>
      <ToastContainer
        position="top-left"
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      <RoutesPage />
    </AuthProvider>
  );
}
export default App;
