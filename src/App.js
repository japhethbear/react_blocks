import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/Subcontents';
import Advertisement from './components/Advertisement';
 
                
function App() {
  return (
    <div className="app">
        <Header />
        <div className='d-flex'>
          <Navigation/>
          <Main className='d-flex flex-column' children={SubContents} otherChildren={Advertisement}>
              <div className='d-flex'>
                <SubContents />
              </div>
              <div>
                <Advertisement />  
              </div>      
          </Main>
        </div>

    </div>
  );
}
                
export default App;

