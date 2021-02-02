import PropTypes from "prop-types";

function Food({ name, grade }) {
  //return (<h3>{props.name}</h3>
  return (
    <div>
      <h1>my name is {name}</h1>
      {grade}/4.5
    </div>
  );
}

const names = [
  { id: 0, name: "bob", grade: 4.5 },
  { id: 1, name: "jeong", grade: 3.0 },
  { id: 2, name: "Lee", grade: 3.2 },
];

//타입을 체크해서 경고를
names.propTypes = {
  name: PropTypes.string,
  grade: PropTypes.number,
};

function renderFood(names) {
  //각각의 element는  구분할수 있는 key값(id)을 가지고 있어야함. 가지지 않을경우 에러뜸
  return <Food key={names.id} name={names.name} grade={names.grade} />;
}

function App() {
  return <div>{names.map(renderFood)}</div>;
}

export default App;
