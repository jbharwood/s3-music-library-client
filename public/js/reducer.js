const initialState =  {
  track: "",
}

function reducer(state=initialState, action){
  switch (action.type) {
    case "SET_TRACK":
      return {...state, track: action.payload}
    // case "WATCH_MOVIE":
    //   return {...state, watchlist: [...state.watchlist, action.payload]}
    // case "VIEW_MOVIE":
    //   return {...state, viewMovie: action.payload}
    // case "SET_CURRENT_USER":
    //   return {...state, user: action.payload}
    // case "SET_FEED_USER":
    //   return {...state, feedUser: action.payload}
    // case "ADD_TO_USERS":
    //   return {...state, users: [...state.users, action.payload]}
    // case "REMOVE_USER_FROM_USERS":
    //   return {...state, users: [...state.users.slice(0, action.payload),...state.users.slice(action.payload + 1)]}
    // case "HIDE_APP":
    //   return {...state, isHidden: action.payload}
    // case "SET_PRIMARY_COLOR":
    //   return {...state, primaryColor: action.payload}
    // case "FETCH_MOVIE":
    //   fetchMovieInfo(action.payload)
    // case "CHANGE_CHATBOX_PAGE":
    //   return {...state, chatboxPage: action.payload}
    default:
      return state
  }
}

export default reducer
