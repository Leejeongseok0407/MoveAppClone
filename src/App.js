function Food({ name }) {
  //return (<h3>{props.name}</h3>
  return <div>my name is {name}</div>;
}

const names = [
  { id: 0, name: "bob" },
  { id: 1, name: "jeong" },
  { id: 2, name: "Lee" },
];

function renderFood(names) {
  //각각의 element는  구분할수 있는 key값(id)을 가지고 있어야함. 가지지 않을경우 에러뜸
  return <Food key={names.id} name={names.name} />;
}

function App() {
  return <div>{names.map(renderFood)}</div>;
}

export default App;
