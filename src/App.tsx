import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { retrieveLaunchParams } from '@telegram-apps/sdk';
import axios from 'axios';

// const url = `https://api.telegram.org/bot7047679046:AAG7OJH-VrVwK8Y9zuprB-dZ3xTaCP-mQO0/sendMessage`;
function App() {
  const [count, setCount] = useState("")

  const { initDataRaw } = retrieveLaunchParams();

  useEffect(() => {
    sendInfo();
  }, []);

  const backUrl = "https://telegram.circle.uz/auth";

  const sendInfo = async () => {
      const result = await axios.post(backUrl, null, {
        headers: {
          Authorization: `tma ${initDataRaw}`,
        },
      });

    setCount(JSON.stringify(result))

  }


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
      <h1>{count}</h1>
      <div className="card">
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
