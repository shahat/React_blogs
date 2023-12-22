import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    /* 
     steps of making request is to do the following 
     Give the fetch the second parameter is {}
     inside the object 3 main properties 

     method : "post",
     headers:{"Content-Type":"application.json"}
     body: JSON.stri
     and json sever add an id for this blog 
    */
    setIsPending(true);
    console.log(blog);
    fetch(`https://products-rica.onrender.com/blogs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log(" a New blog is added ");
      setIsPending(false);
      setTitle("");
      setAuthor("");
      setBody("");
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2> Add a New Blog </h2>
      <form onSubmit={handleSubmit}>
        {/* blog title */}
        <label for="name">Blog title :</label>
        <br />
        <input
          id="name"
          type="text"
          required
          value={title}
          name="name"
          placeholder=" blog title "
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <br />
        {/* blog author */}
        <label for="Author"> Blog Author </label>
        <br />
        <input
          id="author"
          type="text"
          value={author}
          required
          name="author"
          onChange={(e) => setAuthor(e.target.value)}
          placeholder=" blog title "
        ></input>
        <br />
        {/* blog content */}
        <label for="blogContent">blog body:</label> <br />
        <textarea
          id="blogContent"
          name="blogContent"
          value={body}
          placeholder=" enter the blog content "
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        {!isPending ? (
          <button type="submit">Add Blog </button>
        ) : (
          <button disabled> Adding Blog ... </button>
        )}
      </form>
    </div>
  );
};
export default Create;
