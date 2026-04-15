import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [computers, setComputers] = useState([]);
  const [name, setName] = useState('');

  // Завантажуємо дані з сервера при відкритті сторінки
  useEffect(() => {
    fetchComputers();
  }, []);

  const fetchComputers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/computers');
      setComputers(response.data);
    } catch (error) {
      console.error("Помилка при отриманні даних:", error);
    }
  };

  const addScan = async () => {
    if (!name) return alert("Enter computer name!");
    try {
      await axios.post('http://localhost:5000/api/computers', {
        name: name,
        lastScan: new Date().toISOString().split('T')[0]
      });
      setName('');
      fetchComputers(); // Оновлюємо список після додавання
    } catch (error) {
      alert("Сервер не відповідає. Переконайся, що вкладка 'node' запущена!");
    }
  };

  return (
    <div className="App" style={{ padding: '40px', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#2c3e50' }}>Antivirus Control Panel</h1>
        <p style={{ color: '#7f8c8d' }}>System Status: Monitoring via Port 5000</p>
      </header>
      
      <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '8px', marginBottom: '30px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <input 
          style={{ padding: '10px', width: '250px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter Computer Name (e.g. PC-Work-05)" 
        />
        <button 
          onClick={addScan}
          style={{ padding: '10px 20px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
        >
          Run New Scan
        </button>
      </div>

      <table style={{ width: '100%', borderCollapse: 'collapse', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
        <thead>
          <tr style={{ backgroundColor: '#34495e', color: 'white', textAlign: 'left' }}>
            <th style={{ padding: '15px' }}>ID</th>
            <th style={{ padding: '15px' }}>Computer Name</th>
            <th style={{ padding: '15px' }}>Last Scan Date</th>
            <th style={{ padding: '15px' }}>Protection Status</th>
          </tr>
        </thead>
        <tbody>
          {computers.map(pc => (
            <tr key={pc.id} style={{ borderBottom: '1px solid #eee' }}>
              <td style={{ padding: '15px' }}>{pc.id}</td>
              <td style={{ padding: '15px', fontWeight: 'bold' }}>{pc.name}</td>
              <td style={{ padding: '15px' }}>{pc.lastScan}</td>
              <td style={{ padding: '15px' }}>
                <span style={{ 
                  padding: '5px 10px', 
                  borderRadius: '12px', 
                  fontSize: '0.85em',
                  backgroundColor: pc.status === 'Safe' ? '#eafaf1' : '#fdedec',
                  color: pc.status === 'Safe' ? '#27ae60' : '#e74c3c',
                  fontWeight: 'bold'
                }}>
                  {pc.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;