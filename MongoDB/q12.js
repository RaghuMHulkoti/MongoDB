db.Teachers.find({ subject: "Mathematics", experience: { $gt: 10 } })
