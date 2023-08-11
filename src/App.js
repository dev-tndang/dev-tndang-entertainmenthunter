import './App.css';

const App = () => {
  const name = 'Thien!';
  const isNameShowing = true;

  return (
    <div className="App">
      <h1>Hello {isNameShowing ? name : "you!"}</h1>
    </div>
  );
}

export default App;
