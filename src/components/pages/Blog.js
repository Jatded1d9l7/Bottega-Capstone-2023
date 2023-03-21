import React, { useState } from "react";

function Blog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [posts, setPosts] = useState([
    {
      title: "My First Blog Post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut magna sit amet nulla mollis dapibus. Cras ut massa eget ante auctor vestibulum. Sed tincidunt vel ex vel mollis. Etiam at consectetur lectus. Donec a libero justo. Praesent non nisl eu mi cursus rhoncus quis sed urna.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "My Second Blog Post",
      content:
        "Nullam lobortis pharetra dolor, ac facilisis nibh vehicula at. Morbi rhoncus consequat ex. Fusce aliquam ante in metus pulvinar, nec commodo metus molestie. Etiam sollicitudin sit amet turpis eget malesuada. Aliquam congue ligula ac posuere pharetra.",
      image: "https://via.placeholder.com/300",
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="Content-container">
    <div className="Content-wrapper">
      <h1>My Blog</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
        <label htmlFor="image">Image:</label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(event) => setImage(event.target.files[0])}
        />
        <button type="submit">Submit</button>
      </form>

      <div className="Blog-posts">
        {posts.map((post) => (
          <div key={post.title}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <img src={post.image} alt={post.title} />
          </div>
        ))}
      </div>
    </div>
    </div>

  );
}

export default Blog;


