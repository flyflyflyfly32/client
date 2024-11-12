import React from 'react';
import './App.css';
import ImportConponent from './R003_ImportConponent'
import { DiAtom } from "react-icons/di";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p className='bg-slate-500'>CSS 적용하기<DiAtom /></p>
      <ImportConponent></ImportConponent>
    </div>
  );
}

export default App;
