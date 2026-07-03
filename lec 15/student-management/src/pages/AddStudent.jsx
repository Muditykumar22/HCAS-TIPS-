import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addStudent } from '../store/studentSlice'
import Button from '../components/Button'

function AddStudent() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [form, setForm] = useState({ name: '', course: '', age: '' })
  const [errors, setErrors] = useState({})

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function validate() {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.course.trim()) newErrors.course = 'Course is required'
    if (!form.age) newErrors.age = 'Age is required'
    else if (form.age < 1 || form.age > 100) newErrors.age = 'Age must be 1-100'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    dispatch(
      addStudent({
        id: Date.now(),
        name: form.name,
        course: form.course,
        age: Number(form.age),
      })
    )
    navigate('/students')
  }

  return (
    <div className="container">
      <h1 className="page-title">Add Student (Form + Validation)</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input name="name" value={form.name} onChange={handleChange} />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label>Course</label>
          <select name="course" value={form.course} onChange={handleChange}>
            <option value="">Select course</option>
            <option value="BCA">BCA</option>
            <option value="MCA">MCA</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MBA">MBA</option>
          </select>
          {errors.course && <p className="error">{errors.course}</p>}
        </div>

        <div className="form-group">
          <label>Age</label>
          <input name="age" type="number" value={form.age} onChange={handleChange} />
          {errors.age && <p className="error">{errors.age}</p>}
        </div>

        <Button text="Add Student" type="primary" />
      </form>
    </div>
  )
}

export default AddStudent
