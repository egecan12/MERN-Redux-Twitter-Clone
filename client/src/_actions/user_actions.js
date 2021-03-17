import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER,
    AUTH_USER,
    LOGOUT_USER,
    ADD_TWIT,
    ALL_TWITS,
    PROFILE_SETTINGS,
    GET_PROFILE_PAGE,
    ALL_PERSONAL_TWITS
} from './types';
import { USER_SERVER } from '../components/Config.js';

export function registerUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/register`,dataToSubmit)
        .then(response => response.data);
    
    return {
        type: REGISTER_USER,
        payload: request
    }
}

export function loginUser(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/login`,dataToSubmit)
                .then(response => response.data);

    return {
        type: LOGIN_USER,
        payload: request
    }
}

export function auth(){
    const request = axios.get(`${USER_SERVER}/auth`)
    .then(response => response.data);

    return {
        type: AUTH_USER,
        payload: request
    }
}

export function logoutUser(){
    const request = axios.get(`${USER_SERVER}/logout`)
    .then(response => response.data);

    return {
        type: LOGOUT_USER,
        payload: request
    }
}

export function addTwit(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/sendTwit`,dataToSubmit)
    .then(response => response.data);

    return {
        type: ADD_TWIT,
        payload: request
    }
}

export function bringAllTwits(){
    const request = axios.get(`${USER_SERVER}/bringAllTwits`)
    .then(response => response.data)

    return {
        type: ALL_TWITS,
        payload: request,
    }
} 
export function bringAllPersonalTwits(dataToSubmit){
    const request = axios.get(`${USER_SERVER}/bringAllPersonalTwits`, dataToSubmit)
    .then(response => response.data)

    return {
        type: ALL_PERSONAL_TWITS,
        payload: request,
    }
} 
export function bringProfilePage(dataToSubmit){
    const request = axios.get(`${USER_SERVER}/getProfilePageData`, dataToSubmit)
    .then(response => response.data)

    return {
        type: GET_PROFILE_PAGE,
        payload: request,
    }
} 
export function updateProfileSettings(dataToSubmit){
    const request = axios.post(`${USER_SERVER}/sendProfileSettings`, dataToSubmit)
    .then(response => response.data)

    return {
        type: PROFILE_SETTINGS,
        payload: request,
    }
} 