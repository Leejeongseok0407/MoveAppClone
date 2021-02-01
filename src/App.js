function Food({ name }) {
  //return (<h3>{props.name}</h3>
  return <h3>my name is {name}</h3>;
}

function App() {
  return (
    <div>
      <Food name="bob" />
      <Food name="jeong" />
      <Food name="viv" />
    </div>
  );
}

export default App;
