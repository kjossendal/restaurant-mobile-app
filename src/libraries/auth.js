import { Plugins } from '@capacitor/core';
import store from '../store';
import axios from 'axios';

var { Storage } = Plugins;

var setTokenInStorage = (obj) => {
    Storage.set(obj);
};

var getTokenFromStorage = () => {
    return Storage.get({'key': 'token'})
}

var clearStorage = () => {
    Storage.clear();
}

var purgeSession = () => {
    store.dispatch('user/clearSession');
    clearStorage()
}

const auth = {
    login(email, password) {
        return axios.post('api/login', { email: email, password: password })
        .then(resp => {
            let tokenData = {
                'key': 'token', 
                'value': JSON.stringify({
                            'token': resp.data.access_token, 
                            'expires': resp.data.expires_in,
                            'type': resp.data.token_type
                        })
            }
            setTokenInStorage(tokenData)
            store.dispatch('user/setToken', {
                'token': resp.data.access_token, 
                'expires': resp.data.expires_in,
                'type': resp.data.token_type
            })
            return axios.post('api/me', {}, { headers: {"Authorization" : `Bearer ${resp.data.access_token}`} })
        })
        .then(resp => {
            store.dispatch('user/setUser', resp.data)
            return Promise.resolve()
        })
        .catch(err => {
            console.error(err)
            return Promise.reject()
        })
    },
    logout() {
        return getTokenFromStorage()
        .then(t => {
            let token = JSON.parse(t.value)
            return axios.post('api/logout', {}, { headers: {"Authorization" : `Bearer ${token.token}`} })
        })
        .then(() => {
            purgeSession()
        })
        .catch(err => {
            console.error(err)
        })
    },
    register(user) {
        return axios.post('api/register', user)
        .then(resp => {
            let tokenData = {
                'key': 'token', 
                'value': JSON.stringify({
                            'token': resp.data.access_token, 
                            'expires': resp.data.expires_in,
                            'type': resp.data.token_type
                        })
            }
            setTokenInStorage(tokenData)
            store.dispatch('user/setToken', {
                'token': resp.data.access_token, 
                'expires': resp.data.expires_in,
                'type': resp.data.token_type
            })
            return axios.post('api/me', {}, { headers: {"Authorization" : `Bearer ${resp.data.access_token}`} })
        })
        .then(resp => {
            console.log('setting user', resp.data)
            store.dispatch('user/setUser', resp.data)
            // return Promise.resolve()
        })
        .catch(err => {
            console.error(err)
            return Promise.reject()
        })
    },
};

export default auth