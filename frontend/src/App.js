import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Homepage from './pages/Homepage';
import { Outlet, Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Registrationpage from './pages/Registrationpage';
import Loginpage from './pages/Loginpage';
import Header from './moleculs/Header';
import Carview from './pages/Carview';
import Backtotop from './atoms/Backtotop';

function App() {

  function Userlayout(){
    return(
      <>
      <Header />
      <Outlet />
      <Backtotop />
      </>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Userlayout />}>
          <Route index element={<Homepage />} />
          <Route path="carview" element={<Carview />}/>
          <Route path="registration" element={<Registrationpage />}/>
          <Route path="login" element={<Loginpage />}/>
        </Route>

        {/*
        <Route  element={<ProtectedRoutes />}>
          <Route path="/user/*" element={<Userlayout />}>
            <Route index  element={<Newsfeedd />} />
            <Route path='profile' element={<Homepage />} />
            <Route path='forum' element={<Forumapage />} />
            <Route path='forum/theme/:id' element={<Theme />} />
          </Route>
        </Route>*/}
      </Routes>
    </Router>
  );
}

export default App;
