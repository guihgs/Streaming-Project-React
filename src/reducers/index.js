import { combineReducers } from 'redux';

const moviesReducer = () => {
    return [
        {title: 'Spider-Man: homecoming', releaseDate: '05-07-2017', rating: 7.4,},
        {title: 'Aquaman', releaseDate: '12-07-2018', rating: 7,},
        {title: 'Black Panther', releaseDate: '04-25-2018', rating: 7.4,},
        {title: 'Avengers: Ininity War', releaseDate: '05-07-2017', rating: 8.3,},
    ]
}

//Reducer recieve action
const selectedMovieReducer = (state = null, action) => {
    switch(action.type) {
        case 'MOVIE_SELECTED': 
            return action.payload
        default:
            return state    
    }
}

export default combineReducers({
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer
})