const indianStudents = [
  { name: 'Arjun Sharma', email: 'arjun.sharma@gmail.com', city: 'Mumbai' },
  { name: 'Priya Patel', email: 'priya.patel@gmail.com', city: 'Delhi' },
  { name: 'Rohan Gupta', email: 'rohan.gupta@gmail.com', city: 'Bangalore' },
  { name: 'Ananya Singh', email: 'ananya.singh@gmail.com', city: 'Hyderabad' },
  { name: 'Vikram Reddy', email: 'vikram.reddy@gmail.com', city: 'Chennai' },
  { name: 'Kavya Iyer', email: 'kavya.iyer@gmail.com', city: 'Pune' },
  { name: 'Aditya Kumar', email: 'aditya.kumar@gmail.com', city: 'Kolkata' },
  { name: 'Sneha Joshi', email: 'sneha.joshi@gmail.com', city: 'Jaipur' },
  { name: 'Rahul Mehta', email: 'rahul.mehta@gmail.com', city: 'Ahmedabad' },
  { name: 'Divya Nair', email: 'divya.nair@gmail.com', city: 'Lucknow' },
]

export async function fetchStudentsFromApi() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  return data.map((user, index) => ({
    id: user.id,
    name: indianStudents[index]?.name || user.name,
    email: indianStudents[index]?.email || user.email,
    city: indianStudents[index]?.city || user.address.city,
  }))
}
