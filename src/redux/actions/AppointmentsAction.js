import { getAllAppointmentsByUserId } from "../../services/AppointmentsService";
import {
    GET_APPOINTMENT_LOADING,
    GET_APPOINTMENT_SUCCESS,
    GET_APPOINTMENT_FAIL
} from "../types/AppointmentsType";

const getAllAppointmentsByUserIdAction = (id) => async (dispatch) => {
    dispatch({ type: GET_APPOINTMENT_LOADING });
    try {
        const appointents = await getAllAppointmentsByUserId(id);
        dispatch({
            type: GET_APPOINTMENT_SUCCESS,
            payload: appointents.appointment
        });
    } catch (error) {
        dispatch({ type: GET_APPOINTMENT_FAIL, payload: error });
    }
};

export { getAllAppointmentsByUserIdAction };
