import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  /* 
 handle delete was orking with older version of this project so we now we will do delete event using api 
 
 */
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id); // return array of object
  //   setBlogs(newBlogs);
  // };

  /* optaining the data from json server using fetch method  */
  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs5f")
        .then((res) => {
          if (!res.ok)
            throw Error(
              "Error cant fetch the data fetch the data for that resource "
            );
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setIsPending(false);
          setIsPending(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000); // end of setTimeOut we used setTimeOut to make fetching the data more realistic
  }, []); // U should make the empty array for not going into infinry loop

  return (
    <div className="home">
      {/* showing the errror  */}
      {error && <div> {error} </div>}
      {/* 
      Note that  => we use the conditional rendering 
      bcz data take some time to load 

      blogs not be render untill the blogs at the beginning have a value not null
      */}
      {isPending && <div> Loading ... </div>}

      {blogs && <BlogList blogs={blogs} title="All Blogs" />}

      {/* <button onClick={handelDelete}> click here </button> */}
    </div>
  );
};

export default Home;
