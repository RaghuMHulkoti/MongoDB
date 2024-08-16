db.Students.updateOne(
    { name: "John" }, // Query to find the student
    { $set: { grade: "A" } } // Update operation to set the new grade
  );
  