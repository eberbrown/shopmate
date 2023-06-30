import { useEffect, useState } from "react";

export default function useFetch(url) {

    const [data, setData] = useState(null);
    const [loading, setLoading] =useState(false);
    const [error, setError] = useState("");


  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {

      setLoading(true);
      /* Try and Catch is used if there is an error in the server. 
      The if statement is done to show errors created by us. ex. we add the wrong url */
      try {
        const resp = await fetch(url);
        if(resp.ok === false) {
          console.log("Our Error");
          setError(resp.statusText);
          throw new Error(resp.statusText);
        }
        const respData = await resp.json();
        setLoading(false);
        setData(respData);
        setError("");
      } catch (error) {
        console.log("Server Error " + error.message);
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData();

    return controller.abort();

  }, [url]);

  return { data, loading, error };
}
