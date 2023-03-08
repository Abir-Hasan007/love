import logo from './logo.svg';
import './App.css';
import React_Bootstrap from './components/Bootstrap/React_Bootstrap';
import STATE from './components/state/STATE';
import REACT_CONDITION from './components/reactcondition/REACT_CONDITION';
import EVENT_HANDLER from './components/EVENT_HANDLER/EVENT_HANDLER';
import FUNCTON_USESATE from './components/FUNCTON_USESATE/FUNCTON_USESATE';
import HANDLE_CHANGE from './components/HANDLE_CHANGE/HANDLE_CHANGE';

function App() {
  return (
    <div className="App">
     <React_Bootstrap/>
     <STATE/>
     <REACT_CONDITION/>
     <EVENT_HANDLER/>
     <FUNCTON_USESATE/>
     <HANDLE_CHANGE/>
    </div>
  );
}

export default App;



{/* <header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a>
</header> */}