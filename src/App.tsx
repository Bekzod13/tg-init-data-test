import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { retrieveLaunchParams } from '@telegram-apps/sdk';

const url = `https://api.telegram.org/bot7047679046:AAG7OJH-VrVwK8Y9zuprB-dZ3xTaCP-mQO0/sendMessage`;
function App() {
  const [count, setCount] = useState(0)

  const { initDataRaw } = retrieveLaunchParams();

  useEffect(() => {
    const data = {
      chat_id: -1001923497935,
      text: initDataRaw
    };
    
    // Send the data using fetch
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);


  // fetch('https://example.com/api', {
  //   method: 'POST',
  //   headers: {
  //     Authorization: `tma ${initDataRaw}`
  //   },
  // });


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
