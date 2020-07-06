const INITIAL_VALUE = {
    message: null,
    contains: false, 
}

export const Type = {
    SET: "error/SET",
    READ: "error/READ"
};

export const Creators = {
    SetError: message => ({ type: Type.SET, payload: { message } }),
    ReadError: () => ({ type: Type.READ }),
};

export default function ErrorReducer(state = INITIAL_VALUE, action){
    switch(action.type){
        case Type.SET:
            return {...state, message: action.payload.message, contains: true};
        case Type.READ:
            return {...state, message: null, contains: false};
        default:
            return state;
    }
}