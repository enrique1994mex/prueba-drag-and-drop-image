import { startFetchInfoActor, successFetchInfoActor, errorFetchInfoActor } from "../actions/actor";

const initialState = {
    isLoading: true,
    infoActor: {},
    errorInfoActor: null
}

const actorReducer = (state = initialState, action) => {
    switch (action.type) {
        case startFetchInfoActor.toString():
            return {
                ...state,
                isLoading: true
            }
        case successFetchInfoActor.toString():
            return {
                ...state,
                isLoading: false, 
                infoActor: action.payload.info
            }
        case errorFetchInfoActor.toString():
            return {
                ...state,
                isLoading: false,
                infoActor: {}, 
                errorInfoActor: action.payload
            }
        default:
            return state;
    }
}

export default actorReducer; 