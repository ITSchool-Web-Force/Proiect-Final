import { Route, Routes } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import Layout from './components/Layout';
import Weather from './components/StartingPage/LeftContent/Weather';
import ReactGa from 'react-ga';
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

function App() {

  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NDN4RNM' });
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/auth' element={<AuthPage />}></Route>
        <Route path='/weather' element={<Weather />}></Route>
      </Routes>
    </Layout >
  );
}

export default App;
