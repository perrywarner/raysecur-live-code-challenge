import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

type Role = 'User' | 'Administrator';

function App() {
  const [userData, setUserData] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Administrator' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  ])
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState<Role>();

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
        <ul>
          {userData.map((user) =>  {
            return <div key={user.name}>
              <li>Name: {user.name}, Email: {user.email}, Role: {user.role}</li>
              <button onClick={() => {
                const updatedArray = userData.filter((curr) => {
                  return curr.name !== user.name
                })
                setUserData(updatedArray);
              }}>X</button>
              </div>
          })}
        </ul>
          <form onSubmit={(e) => {
              e.preventDefault();
              const target = e.target as typeof e.target & {
                name: { value: string };
                email: { value: string };
                role: { value: string };
              };
              if (target.role.value === 'User' || target.role.value === 'Administrator') {
                const next = {
                  id: userData[userData.length - 1].id + 1,
                  name: target.name.value,
                  email: target.email.value,
                  role: target.role.value,
                }
                setUserData([
                  ...userData,
                  next
                ])            
              }
            }}>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder='name' name='name' />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder='email' name='email' />
            <input value={isAdmin} onChange={(e) => setIsAdmin(e.target.value as Role)} name='role' placeholder='role' />
            <button type="submit" style={{ color: 'grey'}} />
          </form>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
