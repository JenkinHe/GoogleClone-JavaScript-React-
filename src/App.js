import React,{useState} from 'react';


import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routes } from './components/Routes';

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  console.log('Dark Theme State:', darkTheme);

  return (
    <div className={darkTheme ? 'dark' : ''}>
      <div className="dark:bg-gray-900 bg-gray-100 dark:text-gray-200 min-h-screen">
        <Navbar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
            <Routes></Routes>
            <Footer></Footer>
            <div>{darkTheme ? 'Dark Mode Enabled' : 'Dark Mode Disabled'}</div>
          </div>
    </div>
  )
}

export default App;