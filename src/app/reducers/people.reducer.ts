import {ADD_GUEST, REMOVE_GUEST, ADD_PERSON, REMOVE_PERSON, TOGGLE_ATTENDING} from '../actions/people.actions';

function details (state, action) {
    switch (action.type) {
        case ADD_GUEST:
            if (state.id === action.payload) {
                return Object.assign({}, state, {guest: state.guest + 1});
            }
            return state;
        case REMOVE_GUEST:
            if (state.id === action.payload) {
                return Object.assign({}, state, {guest: state.guest - 1});
            }
            return state;
        case TOGGLE_ATTENDING:
            if (state.id === action.payload) {
                return Object.assign({}, state, {attending: !state.attending});
            }
            return state;
        default:
            return state;
    }
};

export function people (state = [], action) {
    switch (action.type) {
        case ADD_PERSON:
            return [
                ...state,
                Object.assign({}, {id: action.payload.id, name: action.payload.name, guest: 0, attending: false})
            ];
        case REMOVE_PERSON:
            return state.filter(person => person.id !== action.payload);
        case ADD_GUEST:
            return state.map(person => details(person, action));
        case REMOVE_GUEST:
            return state.map(person => details(person, action));
        case TOGGLE_ATTENDING:
            return state.map(person => details(person, action));
        default:
            return state;
    }
};
