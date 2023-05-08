import {
    GET_APPOINTMENT_LOADING,
    GET_APPOINTMENT_SUCCESS,
    GET_APPOINTMENT_FAIL
} from "../types/AppointmentsType";

const appointmentReducer = (
    state = {
        appointments: [],
        loading: false,
        error: null
    },
    action
) => {
    switch (action.type) {
        case GET_APPOINTMENT_LOADING:
            return {
                ...state,
                loading: true,
                error: null
            };
        case GET_APPOINTMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                appointments: action.payload
            };
        case GET_APPOINTMENT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

export default appointmentReducer;
