
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import './styles/App.css';
function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </Layout>
    </div >
  );
}

export default App;
