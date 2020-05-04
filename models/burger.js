var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};


module.exports = burger;

// // import orm.js into burger.js
// var orm = require('../config/orm.js');
// // create the code that will call the ORM functions using burger specific input for the ORM.
// var burger = 
// {
//   selectAll: function(callback)
//   {
//     orm.selectAll(function(res)
//     {
//       callback(res);
//     });
//   },
//   insertOne: function(burger_name, callback)
//   {
//     orm.insertOne(burger_name, function(res)
//     {
//       callback(res);
//     });
//   },
//   updateOne: function(burger_id, callback)
//   {
//     orm.updateOne(burger_id, function(res)
//     {
//       callback(res);
//     });
//   }
// };
// // Export at the end of the burger.js file.
// module.exports = burger;