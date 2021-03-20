export const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: Date.now(), text: action.todo, completed: false }];
    case 'DELETE_TODO':
      return[...state.splice(action.todo, 1)];
    default:
      return state;
  }
}
