import Button from './Button'

function StudentCard({ name, course, age, onDelete }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>Course: {course}</p>
      <p>Age: {age}</p>
      {onDelete && (
        <Button text="Delete" onClick={onDelete} type="danger" />
      )}
    </div>
  )
}

export default StudentCard
