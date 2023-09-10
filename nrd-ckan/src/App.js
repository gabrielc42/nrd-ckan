
// console log in react webpage returns success on test api pull
// i don't remember if it did this 6 months ago, but this is a good start

function App() {
  fetch("https://demo.ckan.org/api/3/action/group_list")
    .then((response) => response.json())
    .then((data) => console.log(data));


  return (
    <div className="App">
    </div>
  );
}

export default App;
