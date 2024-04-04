import React from 'react'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import { Results } from './Results';

export const Routess = () => {
  return (
    <div className="p-4">
        
        
          <Routes>
        
        <Route exact path="/" element={<Navigate replace to="/Search" />} />
        <Route exact path ={['/search','/images','/news','/videos']} element={<Results/>}></Route>
      </Routes>
    
    </div>
  );
}

