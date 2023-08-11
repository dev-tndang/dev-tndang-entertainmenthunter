import { useState } from 'react';
import './App.css';

const App = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1>
        <button>-</button>
        {counter}
        <button>+</button>
      </h1>
    </div>
  );
}

export default App;
