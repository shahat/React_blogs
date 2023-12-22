/* 
step-1 - this component reseve the id from the route using useParames 
step-2 - then using the useFetch its custom hook to optain the blog that is in the database 
step-3 - then use these data to build this component  

*/

import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch(`https://products-rica.onrender.com/blogs/${id}`);
  const history = useHistory();
  const handleDelete = (id) => {
    fetch(`https://products-rica.onrender.com/blogs/${id}`, { method: "DELETE" }).then(
      (res) => {
        console.log("res", res);
        history.push("/");
      }
    );
  };
  blog && console.log("this is the blog ", blog);
  return (
    <div className="blog-details">
      {console.log(error)}
      {isPending && <div> is loading ... </div>}
      {error && <div>{error}</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p> Written by : {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
      <button onClick={() => handleDelete(blog.id)}> DELETE</button>
    </div>
  );
};

export default BlogDetails;
