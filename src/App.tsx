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
          <footer className="bd-footer py-2 border-top">
            <div className="container">
              <Link to="/" className="text-dark fw-bold text-decoration-none">&copy; Gordian Logistics {new Date().getFullYear().toString()}</Link>
            </div>
          </footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
