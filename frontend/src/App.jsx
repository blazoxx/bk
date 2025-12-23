import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

  const [cars, setCars] = useState([])

  useEffect(() => {
    axios.get('/api/cars')
      .then(response => {
        setCars(response.data)
      })
      .catch(error => {
        console.error('There was an error fetching the cars!', error);
      });
  }, [])

  return (
    <>
      <h1>blazox</h1>
      <p>Cars: {cars.length}</p>
      {
        cars.map((car, index) => (
          <div key={cars.id}>
            <h2>{car.make} {car.model}</h2>
            <p>Year: {car.year}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
