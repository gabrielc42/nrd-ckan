
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
