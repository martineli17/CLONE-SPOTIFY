export const INITIAL_STATE = {
    data: {},
    loading: false
};

export const Type ={
    GET_REQUEST: "playlistDetails/GET_REQUEST",
    GET_REQUEST_SUCCESS: "playlistDetails/GET_REQUEST_SUCCESS",
}

export const Creators = {
    GetRequestPlaylistDetails: id => ({type: Type.GET_REQUEST, payload: {id}}),
    GetRequestSuccessPlaylistDetails: songs => ({type: Type.GET_REQUEST_SUCCESS, payload: {songs}}),
}

export default function PlaylistDetailsReducer(state = INITIAL_STATE, action){
    switch(action.type){
        case Type.GET_REQUEST:
            return {...state, loading: true};
        case Type.GET_REQUEST_SUCCESS:
            return  {...state, loading: false, data: action.payload.songs};
        default:
            return state;
    }
}