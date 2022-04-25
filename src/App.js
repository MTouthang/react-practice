import "./App.css";

const Person = (props) => {
  return (
    <>
      <h1> Name: {props.name}</h1>
      <h1> Last: {props.last}</h1>
      <h1> Age: {props.age}</h1>
    </>
  );
};

function App() {
  return (
    <div className="App">
      <Person name="John" last="stev" age={20} />
      <Person name="marcy" last="zou" age={33} />
    </div>
  );
}

export default App;
