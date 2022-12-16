import { useEffect, useState } from 'react'
import BreakingLogo from './BreakingLogo'
import breakify from '../helpers/breakify'

function App() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [firstResult, setFirstResult] = useState(['', '', ''])
  const [secondResult, setSecondResult] = useState(['', '', ''])

  useEffect(() => {
    setFirstResult(breakify(firstName))
  }, [firstName])

  useEffect(() => {
    setSecondResult(breakify(lastName))
  }, [lastName])

  return (
    <div className='app'>
      <div className='content'>
        <BreakingLogo result={firstResult} />
        <BreakingLogo result={secondResult} />
        <div className='row'>
          <div className='col'>
            <label>First Name</label>
            <input id='firstname' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
          </div>
          <div className='col'>
            <label>Last Name</label>
            <input onChange={(e) => setLastName(e.target.value)} value={lastName} />
          </div>
        </div>
        <button>Breakify</button>
      </div>
    </div>
  )
}

export default App
