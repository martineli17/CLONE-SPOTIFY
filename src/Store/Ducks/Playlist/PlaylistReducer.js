export const Type = {
    GET_REQUEST: "get_request/PLAYLIST",
    GET_REQUEST_SUCCESS: "get_request_success/PLAYLIST",
}

const INITIAL_VALUE = {
    data: [],
    loading: false,
}

export default function PlaylistReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
        case Type.GET_REQUEST:
            return {...state, loading: true};
        case Type.GET_REQUEST_SUCCESS:
            return {...state, loading: false, data: action.payload.playlist};
        default:
            return state;
    }
}

export const Creators = {
    GetPlaylistRequest: () => ({type: Type.GET_REQUEST}),
    GetPlaylistRequestSuccess: playlist => ({type: Type.GET_REQUEST_SUCCESS, payload: {playlist: playlist}}),
};