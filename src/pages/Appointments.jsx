import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointmentsByUserIdAction } from "../redux/actions/AppointmentsAction";
import { UTILS } from "../shared/Constants";

function Appointments() {
    const { appointments } = useSelector((state) => state.appointmentReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllAppointmentsByUserIdAction(UTILS.USER_ID));
    }, []);
    return (
        <>
            <h1>Appointments</h1>
            {console.log({ appointments })}
        </>
    );
}

export default Appointments;
