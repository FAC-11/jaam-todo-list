// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  addTodo: function(todos, newTodo) {
    // should leave the input argument todos unchanged
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
    newTodo.id = todoFunctions.generateId();
    return todos.concat([newTodo]);
  },
  deleteTodo: function(todos, idToDelete) {
    // should leave the input argument todos unchanged
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter

    var newArray = todos.filter(function(x) {
      return x.id !== idToDelete;
    });
    return newArray;
  },
  markTodo: function(todos, idToMark) {
    // should leave the input argument todos unchanged
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
    var markedArray = todos.map(function(todo) {
      var shouldMarkThisTodo = todo.id === idToMark;
      if (!shouldMarkThisTodo) {
        return todo;
      } else {
        var newTodo = {};
        newTodo.id = todo.id
        newTodo.description = todo.description
        newTodo.done = !todo.done
        return newTodo;
      }
    })
    return markedArray;
  },


  // sortTodos: function(todos, sortFunction) {
  //   // stretch goal! Do this last
  //   // should leave the input arguement todos unchanged
  //   // sortFunction will have same signature as the sort function in array.sort
  //   // hint: array.slice, array.sort
  // },
}
/* istanbul ignore next */
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
