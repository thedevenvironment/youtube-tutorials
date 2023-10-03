import '../styles/App.css'
import { useState } from 'react'

interface Item {
  name: string
  temp: number
  time: number
}

export function AddItem() {
  const [name, setName] = useState('')
  const [temp, setTemp] = useState(350)
  const [time, setTime] = useState(10)

  return (
    <div className='modal'>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input type='number' value={temp} onChange={(e) => setTemp(e.target.valueAsNumber)} />
      <input type='number' value={time} onChange={(e) => setTime(e.target.valueAsNumber)} />
    </div>
  )
}

export default function App() {
  const [items, setItems] = useState<Item[]>([
    { name: 'Chicken Pot Pie', temp: 350, time: 25 },
    { name: 'Shoestring Fries', temp: 350, time: 25 }
  ])
  const showTable = items.length > 0
  const showStart = items.length > 1

  return (
    <>
      <span className='title'>LE SHEF</span>
      <span className='description'>Cook multiple frozen items in your oven at the same time.</span>
      {showTable && (
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>TEMP</th>
              <th>TIME</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={`item-${i}`}>
                <td>
                  <span>{item.name}</span>
                </td>
                <td>
                  <span>{`${item.temp}°F`}</span>
                </td>
                <td>
                  <span>{`${item.time}min`}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div id='btn-wrapper'>
        <button id='add-btn'>ADD ITEM</button>
        {showStart && <button id='start-btn'>START</button>}
      </div>
    </>
  )
}
