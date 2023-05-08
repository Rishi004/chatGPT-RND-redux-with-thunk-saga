import api from "./AxiosService";

const getAllAppointmentsByUserId = async (id) => {
    return new Promise((resolve, reject) => {
        api("get", null, `/appointment/user`, null, null, id)
            .then((response) => {
                resolve(response.data.results);
            })
            .catch((error) => {
                reject(error);
            });
    });
};

export { getAllAppointmentsByUserId };
