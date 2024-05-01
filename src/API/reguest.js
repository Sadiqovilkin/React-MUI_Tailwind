import axios from "axios";
const BASE_URL = "http://localhost:3000/"



export async function getAll(endpoint) {
    let result = { data: null, error: null };
    await axios
        .get(BASE_URL + endpoint)
        .then((res) => {
            result = { ...result, data: res.data };
        })
        .catch((err) => {
            result = { ...result, error: err };
        });

    return result;
}

export async function deleteOne(endpoint, id) {
    let result = { data: null, error: null };
    await axios
        .delete(BASE_URL + endpoint + `/${id}`)
        .then((res) => {
            result = { ...result, data: res.data };
        })
        .catch((err) => {
            result = { ...result, error: err };
        });

    return result;
}


export async function post(endpoint, payload) {
    let result = { data: null, error: null };
    await axios
        .post(BASE_URL + endpoint, payload)
        .then((res) => {
            result = { ...result, data: res.data };
        })
        .catch((err) => {
            result = { ...result, error: err };
        });

    return result;
}