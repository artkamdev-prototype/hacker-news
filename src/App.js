import "./App.css";
import Navbar from "./components/Navbar";
import List from "./components/List";
import { useState, useEffect } from "react";

function App() {
  // logic to get the username
  const [posts, setPosts] = useState([]);
  const url = "http://hn.algolia.com/api/v1/search_by_date";
  const [tag, setTag] = "x";
  const urlSearch = `http://hn.algolia.com/api/v1/search?query=${tag}`;
  useEffect(() => {
    fetch(url)
      .then((response) => {
        // console.log(response.json());
        return response.ok && response.json();
      })

      .then((json) => setPosts(json.hits))
      .catch((error) => console.log(error));
  }, []);
  console.log(posts);

  return (
    <div className="App">
      {posts.map((post) => (
        <div>
          <span>{post.author}</span>
          <br />
          <span>{post.created_at}</span>
          <p> {post.comment_text}</p>
        </div>
      ))}
    </div>
  );
}
//

export default App;
