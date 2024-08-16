db.Customers.aggregate([
    {
       $lookup: {
          from: "Orders", // Replace with your actual orders collection name
          localField: "_id",
          foreignField: "customerId",
          as: "orders"
       }
    },
    {
       $unwind: "$orders"
    },
    {
       $group: {
          _id: "$_id",
          totalSpent: { $sum: "$orders.amount" } // Replace "amount" with the actual field name for order amount
       }
    },
    {
       $match: {
          totalSpent: { $gt: 1000 } // Replace 1000 with the desired amount
       }
    },
    {
       $project: {
          _id: 0,
          customerId: "$_id",
          totalSpent: 1
       }
    }
 ])
 