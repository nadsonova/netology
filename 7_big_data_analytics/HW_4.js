db.store

db.store.insertMany( [ {name: 'bread', category: 'food', price: 30, count: 4},
  {name: 'banana', category: 'food', price: 100, count: 30},
  {name: 'beer', category: 'drink', price: 122, count: 10},
  {name: 'water', category: 'drink', price: 40, count: 400} ] )

db.store.find()

db.store.aggregate( {$group: { '_id': '$category', cost: {$sum: { $multiply: [ '$price', '$count' ]}}}})

db.store.updateMany( {}, {$inc: {count: -1}} )

db.store.find()

db.store.find().sort({price:-1}).limit(2)