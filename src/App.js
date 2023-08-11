import './App.css';

const Person = (props) => {
  return (
    <>
      <h2>First Name: {props.firstName}</h2>
      <h2>Last Name: {props.lastName}</h2>
      <h3>Age: {props.age}</h3>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person 
        firstName='Thien'
        lastName='Dang'
        age='31'
      />
      <Person 
        firstName='Kirigaya'
        lastName='Kazuto'
        age='21'
      />
      <Person 
        firstName='Percy'
        lastName='Bearinton'
        age='43'
      />
    </div>
  );
}

export default App;
