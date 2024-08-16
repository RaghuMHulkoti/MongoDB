// 1
use PWSKILL

// 2
db.createCollection("Employees")

// 3
db.Employees.insertMany([
    { name: "John Doe", position: "Software Engineer", salary: 60000 },
    { name: "Jane Smith", position: "Project Manager", salary: 75000 },
    { name: "Sam Brown", position: "Designer", salary: 50000 }
])

// 4
db.Employees.find().pretty()

// 5
db.Employees.drop()

// 6
db.dropDatabase()

