db.Teachers.updateOne(
    { name: "Alice Johnson" },  // Filter to find the specific teacher
    { $set: { experience: 15 } }  // Update the experience field
)
