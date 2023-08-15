import { useState, useEffect, useRef } from "react";
import axios from "axios";

export const useApi = (url) => {
  const [apidata, setApiData] = useState([]);
  const isCachePresent = useRef(false); // Initialize as false

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        if (data) {
          setApiData(data);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
        // Handle the error (e.g., display an error message)
      }
    };

    const datafromCache = async () => {
      try {
        const cache = await caches.open("mentorList-cache");
        const cacheResponse = await cache.match(url);
        if (cacheResponse) {
          const body = await cacheResponse.json();
          setApiData(body);
          isCachePresent.current = true;
        } else {
          fetchData();
        }
      } catch (err) {
        console.error("Error retrieving data from cache:", err);
        // Handle the error (e.g., display an error message)
      }
    };

    const cacheData = async () => {
      try {
        const cache = await caches.open("mentorList-cache");
        await cache.add(url);
        isCachePresent.current = true;
      } catch (err) {
        console.error("Error caching data:", err);
        // Handle the error (e.g., display an error message)
      }
    };

    if (!isCachePresent.current) {
      fetchData();
      cacheData();
    } else {
      datafromCache();
    }
  }, [url]);

  return apidata;
};
