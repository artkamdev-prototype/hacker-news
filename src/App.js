import "./App.css";
import Navbar from "./components/Navbar";
import List from "./components/List"

function App() {
  // logic to get the username
  const username = "John Doe";

  return (
    <div className="App">
      <Navbar username={username} />
      <h2>Our List:</h2>
      <List />
    </div>
  );
}

export default App;
