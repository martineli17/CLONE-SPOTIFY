import Sound from 'react-sound';

export const INITIAL_STATE = {
    currentSong: {},
    status: Sound.status.PAUSED,
    list: [],
    position: null,
    duration: null,
    volume: 100,
    repeat: false,
};

export const Type = {
    LOAD: "player/LOAD",
    PAUSE: "player/PAUSE",
    PLAY: "player/PLAY",
    NEXT: "player/NEXT",
    PREV: "player/PREV",
    PLAYING: "player/PLAYING",
    SET_VOLUME: "player/SET_VOLUME",
    REPEAT: "player/REPEAT",
}

export const Creators = {
    LoadPlayer: (song, list) => ({ type: Type.LOAD, payload: { song, list } }),
    Pause: () => ({ type: Type.PAUSE }),
    Play: () => ({ type: Type.PLAY }),
    Next: finished => ({ type: Type.NEXT, payload: {finished} }),
    Prev: () => ({ type: Type.PREV }),
    Playing: ({ duration, position }) => ({ type: Type.PLAYING, payload: { position, duration } }),
    Volume: volume => ({ type: Type.SET_VOLUME, payload: { volume } }),
    Repeat: () => ({ type: Type.REPEAT }),
}

export default function PlayerReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Type.LOAD:
            return { ...state, position: null, status: Sound.status.PLAYING, currentSong: action.payload.song, list: action.payload.list };
        case Type.PAUSE:
            return { ...state, status: Sound.status.PAUSED };
        case Type.PLAY:
            return { ...state, status: Sound.status.PLAYING };
        case Type.NEXT:
            return NextSong(state, 1, action.payload.finished);
        case Type.PREV:
            return NextSong(state, -1);
        case Type.PLAYING:
            return { ...state, ...action.payload }
        case Type.SET_VOLUME:
            return { ...state, volume: action.payload.volume }
        case Type.REPEAT:
            return { ...state, repeat: !state.repeat }
        default:
            return state;
    }
}

function NextSong(state, valueNext, finished = false) {
    const currentIndex = state.list.findIndex(x => x.id === state.currentSong.id);
    const next = state.list[currentIndex + valueNext]
    if (next) {
        return { ...state, position: 0, status: Sound.status.PLAYING, currentSong: next };
    }
    else {
        if(finished){
            return { ...state, position: 0, status: Sound.status.FINISHED, currentSong: {} };
        }
        return state;
    }
}