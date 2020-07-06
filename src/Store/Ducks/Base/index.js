import {combineReducers} from 'redux';
import PlaylistReducer from '../Playlist/PlaylistReducer';
import PlaylistDetailsReducer from '../Playlist/PlaylistDetailsReducer';
import PlayerReducer from '../Playlist/PlayerReducer';
import ErrorReducer from '../Error/ErrorReducer';

export default combineReducers({
    Playlist: PlaylistReducer,
    PlaylistDetails: PlaylistDetailsReducer,
    Error: ErrorReducer,
    Player: PlayerReducer,
});
