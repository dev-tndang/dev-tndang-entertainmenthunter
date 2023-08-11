import './App.css';

const App = () => {
  const name = null;

  return (
    <div className="App">
      {name ? (
        <>
        <h1>Hello, {name}!</h1>
        </>
      ):(
        <>
        <h1>Error!</h1>
        <h2>There is no name...</h2>
        </>
      )}
    </div>
  );
}

export default App;
