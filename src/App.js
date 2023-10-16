import RoutesApp from "./routes";
import { ToastContainer } from 'react-toastify';
import { Helmet } from 'react-helmet';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Projeto Filmes - Santana</title>
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Helmet>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RoutesApp/>
    </div>
  );
}

export default App;
