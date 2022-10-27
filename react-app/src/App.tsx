import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MoodPriorityExample } from './components/MoodPriorityExample'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <div className="App">
      <RecoilRoot>
      <header className="App-header">
        <MoodPriorityExample />
        <button>Hello</button>
      </header>
      </RecoilRoot>
    </div>
  );
}

export default App;
