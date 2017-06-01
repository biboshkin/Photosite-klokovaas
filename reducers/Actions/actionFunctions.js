import { SET_DISPLAY_STRING, CLEAR, EQUALLY } from './actionConstants';

export function setDisplayString(value) {
    return {
        type: SET_DISPLAY_STRING, 
        value: value 
    }
}

export function clear (value) {
    return {
        type: CLEAR
    }
}

export function equally (value) { 
    return {
        type: EQUALLY
    }
};