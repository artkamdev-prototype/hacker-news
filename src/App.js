import "./App.css";
import Navbar from "./components/Navbar";
import List from "./components/List";
import { useState, useEffect } from "react";

function App() {
  // logic to get the username
  const [posts, setPosts] = useState([]);
  const url = "http://hn.algolia.com/api/v1/search_by_date";
  const [tag, setTag] = useState("");
  const urlSearch = `http://hn.algolia.com/api/v1/search?query=${tag}`;
  console.log(urlSearch);
  useEffect(() => {
    fetch(url)
      .then((response) => {
        // console.log(response.json());
        return response.ok && response.json();
      })

      .then((json) => setPosts(json.hits))
      .catch((error) => console.log(error));
  }, []);
  //console.log(posts);
  const submitHandler = (e) => {
    //console.log(e.key);
    if (e.key !== "Enter") return;

    const searchTag = e.target.value;
    //console.log(searchTag);
    setTag(searchTag);
    e.target.value = "";
  };
  console.log(tag);
  useEffect(() => {
    fetch(urlSearch)
      .then((response) => {
        // console.log(response.json());
        return response.ok && response.json();
      })

      .then((json) => setPosts(json.hits))
      .catch((error) => console.log(error));
  }, [tag]);

  return (
    <div className="App">
      <input
        onKeyDown={submitHandler}
        type="text"
        placeholder="What do you wanna look for?"
      />

      {posts.map((post) => (
        <div>
          <span>{post.author}</span>
          <br />
          <span>{post.created_at}</span>
          <p> {post.title}</p>
        </div>
      ))}
    </div>
  );
}
//

export default App;
