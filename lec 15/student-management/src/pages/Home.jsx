import { useState } from 'react'
import Button from '../components/Button'

function Home() {
  const [count, setCount] = useState(0)
  const [showMessage, setShowMessage] = useState(false)

  return (
    <div className="container">
      <h1 className="page-title">Student Management System</h1>

      <div className="counter-box">
        <h2>Counter (useState)</h2>
        <p>Count: {count}</p>
        <Button text="Increase" onClick={() => setCount(count + 1)} />
        <Button text="Decrease" onClick={() => setCount(count - 1)} type="secondary" />
      </div>

      <div className="counter-box">
        <h2>Conditional Rendering</h2>
        <Button
          text={showMessage ? 'Hide Message' : 'Show Message'}
          onClick={() => setShowMessage(!showMessage)}
        />
        {showMessage && <p style={{ marginTop: '15px', color: 'green' }}>Hello! Welcome to React.</p>}
        {!showMessage && <p style={{ marginTop: '15px', color: 'gray' }}>Message is hidden.</p>}
      </div>
    </div>
  )
}

export default Home
