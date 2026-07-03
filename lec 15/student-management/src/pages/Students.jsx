import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import StudentCard from '../components/StudentCard'
import { removeStudent } from '../store/studentSlice'

function Students() {
  const students = useSelector((state) => state.students.list)
  const dispatch = useDispatch()
  const [search, setSearch] = useState('')

  const filtered = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="container">
      <h1 className="page-title">All Students (Redux + Lists)</h1>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {filtered.length === 0 ? (
        <div className="empty-msg">No students found.</div>
      ) : (
        <div className="card-grid">
          {filtered.map((student) => (
            <StudentCard
              key={student.id}
              name={student.name}
              course={student.course}
              age={student.age}
              onDelete={() => dispatch(removeStudent(student.id))}
            />
          ))}
        </div>
      )}

      <p style={{ marginTop: '20px' }}>Total: {filtered.length} students</p>
    </div>
  )
}

export default Students
