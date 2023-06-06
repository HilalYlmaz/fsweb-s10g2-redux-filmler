import { TOGGLE_FAVORITES,ADD_FAVORITE, REMOVE_FAVORITE} from "../actions/favoritesActions";

const initialState ={
    favorites: [],
    displayFavorites: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case REMOVE_FAVORITE:
        return {
          ...state,
          movies: state.favorites.filter(item => (action.payload !== item.id))
        };
      case ADD_FAVORITE:
        return {
          ...state,
          movies: [...state.favorites, action.payload],
        };
      case TOGGLE_FAVORITES:
        return {
            ...state,
            displayFavorites: !state.displayFavorites
        };
           
      default:
        return state;
    }
  }
  
  export default reducer;