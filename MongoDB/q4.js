db.Customers.updateOne(
    { _id: ObjectId("customer_id") }, // Replace "customer_id" with the actual ID of the customer
    { $set: { address: "new_address" } } // Replace "new_address" with the new address
 )
 