import React, { useEffect,useState } from 'react';
export default function FetchLogic(url){
    const [data, setData] = useState([]);
    
      useEffect(() => {
          fetch(url)
          .then(res => res.json())
          .then(res => setData(res))
          .catch(err => alert(err));
          },[url]);
    
          return  data.data ;
}