function Food({ name }) {
  //return (<h3>{props.name}</h3>
  return <div>my name is {name}</div>;
}

const names = [{ name: "bob" }, { name: "jeong" }, { name: "Lee" }];

function App() {
  return (
    <div>
      {names.map((nameString) => {
        //<Food name={nameString.name} />;
        return <Food name={nameString.name} />;
      })}
    </div>
  );
}

// function App() {
//   return (
//     <div>
//       <Food name="bob" />
//       <Food name="jeong" />
//       <Food name="viv" />
//     </div>
//   );
// }

export default App;
