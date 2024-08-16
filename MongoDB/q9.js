db.Students.find({
    $or: [
      { age: { $gt: 14 } },
      { grade: "9th" }
    ]
  });
  