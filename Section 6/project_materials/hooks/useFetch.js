import { useState, useEffect, useCallback } from 'react'; 
import _fetch from '../services/_fetch';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const get = useCallback(async (getUrl) => {
    setLoading(true);
    setError(null);
  
    try {
      const response = await _fetch(getUrl || url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });  

      const result = await response.json();
      
      if(result.error) {
        setError(result);
      } else {
        setData(result);
      }

    } catch (err) {
      setError(err.message);
      return err;
    } finally {
      setLoading(false);
    }
  }, [url]); 

  const post = useCallback(async (postUrl, postData) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await _fetch(postUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      const result = await response.json();
      
      if(result.error) {
        setError(result);
      } else {
        setData(result);
      }
    } catch (err) {
      setError(err.message);
      return err;
    } finally {
      setLoading(false);
    }
  }, []); 

  const hideError = () => {
    setError(null);
  } 

  useEffect(() => {
    if(url) get();
  }, [get, url]);

  return { data, loading, error, setData, get, post, hideError }
};

export default useFetch;