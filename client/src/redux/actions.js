import axios from "axios";
import { API_BASE_URL } from "../configs/configs";

export const SET_LOADING = "SET_LOADING";
export const SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN";

export const setAccessToken = (accessToken) => {
    return {
        type: SET_ACCESS_TOKEN,
        payload: {
            accessToken,
        },
    };
};

export const setLoading = (isLoading) => {
    return {
        type: SET_LOADING,
        payload: {
            isLoading,
        },
    };
};

export const login = (email, password) => {
    return (dispatch) => {
        dispatch(setLoading(true));

        axios
            .post(API_BASE_URL + "auth/login", {
                email,
                password,
            })
            .then((response) => {
                dispatch(setLoading(false));
                if (response.data.status === true && response.data.data) {
                    const { access_token: accessToken } = response.data.data;
                    dispatch(setAccessToken(accessToken));
                }

                console.log(response.data);
            })
            .catch((error) => {
                dispatch(setLoading(false));
                console.log(error.message);
            });
    };
};

export const validateAccessToken = (accessToken) => {
    return (dispatch) => {};
};

export const loginAsync = () => {};
