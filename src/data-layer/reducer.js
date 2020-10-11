import { actions } from "./actions";
export const initialState = {
  user: null,
  // REMOVE BEFORE DEPLOY!!!
  // token:
  // "BQCwmZsK3jJa2VjVYomxQl_cC6wYakFZWjjUjHS9Xj5kaDJGpOedXyBOysMiCUyKVSL-Tl6XYX_LY8YvThX4VIoDeRgJjQXHo1jhCAqUWs3n3W35Azh_t9CejaloP7v7YeAyyTP2keewkANPiXJrEbf-tzBCtsbT6PSb7kZlvrLecKVoxMu_",
  playlist: [],
  playing: false,
  item: null,
};

const reducer = (state, action) => {
  console.log(action);
  // Action -> type, [payload]
  switch (action.type) {
    case actions.setUser:
      return {
        ...state,
        user: action.user,
      };
    case actions.setToken:
      return {
        ...state,
        token: action.token,
      };
    case actions.setPlayLists:
      return {
        ...state,
        playLists: action.playLists,
      };
    case actions.setDiscoverWeekly:
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
