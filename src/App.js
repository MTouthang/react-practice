import "./App.css";

function App() {
  const name = false;
  const isName = true;
  return (
    <div className="App">
      <h1> Hello {isName ? name : "no name"} </h1>
      {name ? (
        <>
          <h1> {name} </h1>
        </>
      ) : (
        <>
          <h1> Test </h1>
          <p> No name available here</p>
        </>
      )}
    </div>
  );
}

export default App;
