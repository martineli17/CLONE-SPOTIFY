import {put} from 'redux-saga/effects';
import {Creators} from '../../Ducks/Playlist/PlaylistDetailsReducer';
import {Creators as CreatorsError} from '../../Ducks/Error/ErrorReducer';
import Api from '../../../Services/Base/axios';

export default function* GetPlaylistDetails(action){
    try{
        const response = yield Api.get(`/playlists/${action.payload.id}?_embed=songs`);
        yield put(Creators.GetRequestSuccessPlaylistDetails(response.data));
    }
    catch(error){
        yield put(CreatorsError.SetError("Ocorreu um erro ao carregar os detalhes da playlist desejada."));
    }
}