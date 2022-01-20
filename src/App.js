import React from 'react';
import './App.css';
import styled from 'styled-components';
import Boredom from './components/boredom';
import BoredomActivity from './components/boredomActivity';


const StyledApp = styled.div`
    text-align: center;
    border: 1px solid rgb(210, 210, 210);
    box-shadow: 0px 1px 6px -2px rgb(128, 127, 127);
    border-radius: 8px;
    margin: 16px;
    padding: 16px 8px 12px 16px;
    background-color: #2D82B7;
    
`
function App() {
  return (
      <StyledApp className="App">
          <h1>Welcome to the BoreDOM!!</h1>
          <Boredom/>
          <BoredomActivity/>
      </StyledApp>

  );
}

export default App;