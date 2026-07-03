import { useState, useEffect } from 'react'
import { fetchStudentsFromApi } from '../api/studentApi'

function ApiStudents() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)
    fetchStudentsFromApi()
      .then((data) => {
        setStudents(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to fetch data')
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="container"><p className="loading">Loading...</p></div>
  if (error) return <div className="container"><p className="error">{error}</p></div>

  return (
    <div className="container">
      <h1 className="page-title">API Students (useEffect + Fetch)</h1>
      <ul className="api-list">
        {students.map((student) => (
          <li key={student.id}>
            <strong>{student.name}</strong> — {student.email} — {student.city}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ApiStudents
