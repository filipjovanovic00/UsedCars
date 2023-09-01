import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Homepage from './pages/Homepage';
import { Outlet, Route,BrowserRouter as Router, Routes } from 'react-router-dom';
import Registrationpage from './pages/Registrationpage';
import Loginpage from './pages/Loginpage';
import Header from './moleculs/Header';
import Carview from './pages/Carview';
import Backtotop from './atoms/Backtotop';
import Headeruser from './moleculs/Headeruser';
import Addad from './pages/Addad';
import Profilepage from './pages/Profilepage';
import Headeradmin from './moleculs/Headeradmin';
import Adminwork from './pages/Adminwork';
import Aftersearch from './pages/Aftersearch';
import ProtectedRoutesUser from './auth/Protectedroutesuser';
import ProtectedRoutesAdmin from './auth/Protectedroutesadmin';
import axios from 'axios';
import { useEffect } from 'react';

function App() {

  const token = localStorage.getItem('token');

  useEffect(()=>{
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  },[])

  function Alllayout(){
    return(
      <>
      <Header />
      <Outlet />
      <Backtotop />
      </>
    );
  }

  function Userlayout(){
    return(
      <>
      <Headeruser />
      <Outlet />
      <Backtotop />
      </>
    );
  }

  function Adminlayout(){
    return(
      <>
      <Headeradmin />
      <Outlet />
      <Backtotop />
      </>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Alllayout />}>
          <Route index element={<Homepage />} />
          <Route path="carview/:id" element={<Carview />}/>
          <Route path="search/:searchparam" element={<Aftersearch />}/>
          <Route path="search/:searchparam/carview/:id" element={<Carview/>}/>
          <Route path="registration" element={<Registrationpage />}/>
          <Route path="login" element={<Loginpage />}/>
        </Route>
        <Route  element={<ProtectedRoutesUser />}>
          <Route path="/user" element={<Userlayout />}>
            <Route index element={<Homepage />} />
            <Route path="carview/:id" element={<Carview />}/>
            <Route path="profile/carview/:id" element={<Carview />}/>
            <Route path="search/:searchparam" element={<Aftersearch />}/>
            <Route path="search/:searchparam/carview/:id" element={<Carview/>}/>
            <Route path="addAd" element={<Addad />}/>
            <Route path="profile" element={<Profilepage />}/>
            <Route path="profile/search/:searchparam" element={<Aftersearch />}/>
            <Route path="profile/search/:searchparam/carview/:id" element={<Carview/>}/>
          </Route>
        </Route>
        <Route  element={<ProtectedRoutesAdmin />}>
          <Route path="/admin" element={<Adminlayout />}>
            <Route index element={<Homepage />} />
            <Route path="carview/:id" element={<Carview />}/>
            <Route path="profile/carview/:id" element={<Carview />}/>
            <Route path="search/:searchparam" element={<Aftersearch />}/>
            <Route path="search/:searchparam/carview/:id" element={<Carview/>}/>
            <Route path="addAd" element={<Addad />}/>
            <Route path="aproveAdds" element={<Adminwork />}/>
            <Route path="profile" element={<Profilepage />}/>
            <Route path="profile/search/:searchparam" element={<Aftersearch />}/>
            <Route path="profile/search/:searchparam/carview/:id" element={<Carview/>}/>
          </Route>
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
