import React, { useState } from "react";

export default function List() {
    
  const [list, setList] = useState([
    { id: 1, title: "One", description: "desc one" },
    { id: 2, title: "Two", description: "desc two" },
  ]);

  //   const numbers = [1, 2, 3, 4];
  //   const mappedNumbers = numbers.map((number, index) => {
  //     return <p key={index}> {number}</p>;
  //   });

  return (
    <div>
      {list.map((post) => {
        return (
          <div className="post" key={post.id}>
            <p>Title: {post.title}</p>
            <p>Description: {post.description}</p>
          </div>
        );
      })}
      <button
        onClick={() => {
          //   const copy = list.slice();
          //   copy.push({ id: 3, title: "Three", description: "desc three" });
          //   setList(copy)

          setList([
            ...list,
            { id: 3, title: "Three", description: "desc three" },
          ]);
        }}
      >
        add
      </button>
    </div>
  );
}
