import React, { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";

export const useApi = (url) => {
  const [apidata, setApiData] = useState([]);
  const isCachePresent = useRef(sessionStorage.getItem('isCachePresent') === 'true');

  const fetchData = useCallback(async (url) => {
    try {
      const { data } = await axios.get(url);
      if (data) {
        setApiData(data);
      }
    } catch (err) {
      console.error('Error fetching data:', err);
      // Handle the error (e.g., display an error message)
    }
  }, []);

  const startCaching = useCallback(async () => {
    const newCache = await caches.open('new-cache');
    await newCache.add(url);
    if (newCache) {
      const res = await caches.has('new-cache');
      if (res) {
        sessionStorage.setItem('isCachePresent', 'true');
        isCachePresent.current = true;
      }
    }
  }, [url]);

  const datafromCache = useCallback(async () => {
    try {
      let cacheResponse = await caches.match(url);
      if (cacheResponse) {
        let body = await cacheResponse.json();
        setApiData(body);
        isCachePresent.current = true;
      } else {
        fetchData(url);
      }
    } catch (err) {
      console.error('Error retrieving data from cache:', err);
      // Handle the error (e.g., display an error message)
    }
  }, [url, fetchData]);

  useEffect(() => {
    if (apidata.length === 0 && !isCachePresent.current) {
      fetchData(url);
      startCaching();
    } else {
      datafromCache();
    }
  }, [url, apidata.length, isCachePresent.current, fetchData, startCaching, datafromCache]);

  return apidata;
};