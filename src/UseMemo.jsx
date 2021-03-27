import P from 'prop-types';
import './App.css';
import React, { useEffect, useMemo, useState } from 'react';

const Post = ({ post }) => {
  console.log('filho redenrizou');
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};
Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};
function App() {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState(' ');
  console.log('Pai redenrizou');

  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  });
  return (
    <div className="App">
      <p>
        <input type="search" value={value} onChange={(e) => setValue(e.target.value)} />
      </p>
      {useMemo(() => {
        posts.length > 0 &&
          posts.map((post) => {
            return <Post key={post.id} post={post} />;
          });
      })}
      {posts.length <= 0 && <p>Ainda não existem posts.</p>}
    </div>
  );
}

export default App;
