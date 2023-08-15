import { useState, useEffect, useRef } from "react";
import axios from "axios";

export const useApi = (url) => {
  const [apidata, setApiData] = useState([]);
  const isCachePresent = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(url);
        if (data) {
          setApiData(data);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
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
      }
    };

    const cacheData = async () => {
      try {
        const cache = await caches.open("mentorList-cache");
        await cache.add(url);
        isCachePresent.current = true;
      } catch (err) {
        console.error("Error caching data:", err);
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
