// Import MySQL connection.
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }
  return arr.toString();
}

var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

// Export the orm object for the model.
module.exports = orm;

// //Import (require) connection.js into orm.js
// var connection = require('../config/connection.js')
// //Create the methods that will execute the necessary MySQL commands in the controllers. 
// //These are the methods you will need to use in order to retrieve and store data in your database.
// var orm = 
// {
//     //selectAll()
//     selectAll: function(callback) 
//     {
//         //mySQL Query
//         connection.query('SELECT * FROM burgers', function(err, result)
//         {
//             if (err) throw err;
//             callback(result);
//         });
//     },
//     //insertOne()
//     insertOne: function(burger_name, callback)
//     {
//         connection.query('INSERT INTO burgers SET ?', 
//             {   burger_name: burger_name,
//                 devoured: false,
//             }, function(err, result)
//             {
//                 if (err) throw err;
//                 callback(result);
//             });
//     },
//     //updateOne()
//     updateOne: function(burgerID, callback)
//     {
//         connection.query('UPDATE burgers SET ? WHERE ?', [{devoured: true}, {id: burgerID}],
//             function(err, result)
//             {
//                 if (err) throw err;
//                 callback(result);
//             });
//     },
//         //updateOne()
//         delete: function(burger_name, callback)
//         {
//             connection.query('DELETE burgers SET ? WHERE ?', [{delete: true}, {id: burger_name}],
//                 function(err, result)
//                 {
//                     if (err) throw err;
//                     callback(result);
//                 });
//         }
// };
// // Export the ORM object in module.exports.
// module.exports = orm