db.Customers.insertOne({
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
    phone: "123-456-7890",
    address: {
        street: "123 Main St",
        city: "Bengaluru",
        state: "Karnataka",
        zip: "560001"
    }
})
