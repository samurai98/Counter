export const SET_NEW_SETTINGS = 'Counter/src/redux/SET-NEW-SETTINGS';
export const INC_CURRENT_VALUE = 'Counter/src/redux/INC-CURRENT-VALUE';
export const RESET_CURRENT_VALUE = 'Counter/src/redux/RESET-CURRENT-VALUE';
export const SET_ERROR = 'Counter/src/redux/SET-ERROR';
export const SET_MESSAGE = 'Counter/src/redux/SET-MESSAGE';

const initialState = {
    currentValue: 0,
    maxValue: 5,
    startValue: 0,
    error: false,
    message: true
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_SETTINGS:
            return {
                ...state,
                currentValue: action.newStart,
                maxValue: action.newMax,
                startValue: action.newStart
            };
        case INC_CURRENT_VALUE:
            return {
                ...state,
                currentValue: state.currentValue + 1
            };
        case RESET_CURRENT_VALUE:
            return {...state, currentValue: state.startValue};
        case SET_ERROR:
            return {
                ...state,
                error: action.value
            };
        case SET_MESSAGE:
            return {
                ...state,
                message: action.value
            };
        default:
            return state;
    }
};

// ActionCreators

export const setNewSettingsAC = (newMax, newStart) => ({type: SET_NEW_SETTINGS, newMax, newStart});

export const incrementCurrentValueAC = () => ({type: INC_CURRENT_VALUE});

export const resetCurrentValueAC = () => ({type: RESET_CURRENT_VALUE});

export const setErrorAC = (value) => ({type: SET_ERROR, value});

export const setMessageAC = (value) => ({type: SET_MESSAGE, value});


