export default function Reducer(state = [], action){
  switch(action.type){
    case 'ADD_TO_CART':
      return[ ...state, action];
    default:
      return state
  }
}