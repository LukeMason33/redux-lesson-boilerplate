export const addToDo = todo => ({
  type: 'ADD_TODO',
  todo
});

export const deleteToDo = todo => ({
  type: 'DELETE_TODO',
  todo
})
