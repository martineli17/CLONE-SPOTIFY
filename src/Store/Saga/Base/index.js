import {all, takeLatest} from 'redux-saga/effects';
import GetPlaylist from '../Playlist/PlaylistSaga';
import GetPlaylistDetails from '../Playlist/PlaylistDetailsSaga';
import {Type as TypePlaylist} from '../../Ducks/Playlist/PlaylistReducer';
import {Type as TypePlaylistDetails} from '../../Ducks/Playlist/PlaylistDetailsReducer';

export default function* RootSaga(){
    yield all([
        takeLatest(TypePlaylist.GET_REQUEST, GetPlaylist),
        takeLatest(TypePlaylistDetails.GET_REQUEST, GetPlaylistDetails),
    ]);
}