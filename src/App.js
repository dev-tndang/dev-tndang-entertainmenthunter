import './App.css';

const Person = () => {
  return (
    <>
      <h2>First Name: Thien</h2>
      <h2>Last Name: Dang</h2>
      <h3>Age: 31</h3>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person />
    </div>
  );
}

export default App;
