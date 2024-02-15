
import React, { useState, useEffect } from 'react';
import CryptoJS from 'crypto-js';

const HashingComponent = () => {
   const [data, setData] = useState('Hello, world!');
   const [hashedData, setHashedData] = useState('');

   useEffect(() => {
      hashData();
   }, []);

   const hashData = () => {
      const hashedData = CryptoJS.MD5(data).toString();
      setHashedData(hashedData);
   }

   return (
      <div>
         <p>Data: {data}</p>
         <p>Hashed Data: {hashedData}</p>
      </div>
   );
}

export default HashingComponent;
