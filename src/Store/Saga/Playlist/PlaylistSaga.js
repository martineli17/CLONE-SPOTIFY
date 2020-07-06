import {put} from 'redux-saga/effects';
import Api from '../../../Services/Base/axios';
import {Creators} from '../../Ducks/Playlist/PlaylistReducer';
import {Creators as CreatorsError} from '../../Ducks/Error/ErrorReducer';

export default function* GetPlaylist(){
    try{
        const response = yield Api.get("/playlists");
        yield put(Creators.GetPlaylistRequestSuccess(response.data));
    }
    catch(error){
        yield put(CreatorsError.SetError("Ocorreu um erro ao carregar as playlists."));
    }
}