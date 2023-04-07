import { useState, useEffect } from "react";
// custom hooks should start with the word use
// this hook now is more reusable to use
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    // end of setTimeOut we used setTimeOut to make fetching the data more realistic
    setTimeout(() => {
      fetch(url) // we import the url here to make it more reusable for any url
        .then((res) => {
          if (!res.ok)
            throw Error(
              "Error cant fetch the data fetch the data for that resource"
            );
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setIsPending(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return {
    data,
    isPending,
    error,
  };
};
export default useFetch;
