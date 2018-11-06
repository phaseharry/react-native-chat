//action types 
const LOG_IN = 'LOG_IN'

//action creators
export const _logIn = user => ({ action : LOG_IN, user})

//thunks


const authReducer = (state= {}, action) => {
  switch(action.type){
    case LOG_IN:
      return user
    default:
      return state
  }
}

export default authReducer