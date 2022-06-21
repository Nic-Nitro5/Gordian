import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar } from './utils/Navbar';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { Register } from './pages/Register';
import routes from './route-config';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="container-fluid">
          <Routes>
            {routes.map(route => <Route key={route.path} path={route.path} element={<route.component />} />)}
          </Routes>
        </div>
        {/* footer */}
        <div className="container my-2 text-center">
          <Link to="/" className="text-dark text-decoration-none">&copy; Gordian Logistics {new Date().getFullYear().toString()}</Link>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
