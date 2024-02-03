import React, { useEffect, useState } from 'react';

function Event() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run the effect once when the component mounts

  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



       
export default Event ;