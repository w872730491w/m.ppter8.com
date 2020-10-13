import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/plugins/axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        token: null,
        user: null,
        isLogin: false
    },
    mutations: {
        LOGINED(state, { token, isInit }) {
            state.isLogin = true
            state.token = token
            if (isInit === false) {
                uni.setStorage({
                    key: 'token',
                    data: token,
                    success: function () {
                        console.log('success');
                    }
                });
            }
        },
        SET_PROFILE(state, data) {
            state.user = data;
        },
        REFRESH_TOKEN(state, token) {
            state.token = token
            axios.defaults.headers.common['Authorization'] = token
        },
        LOGOUT(state) {
            state.token = null;
            state.user = null;
            state.isLogin = false;
            uni.removeStorage({
                key: 'token'
            })
        }
    },
    actions: {
        logined({ dispatch, commit }, { token, isInit = false }) {
            console.log(isInit)
            return new Promise(function (resolve, reject) {
                commit('LOGINED', { token, isInit })
                axios.defaults.headers.common['Authorization'] = token
                dispatch('profile').then(() => {
                    resolve()
                }).catch(() => {
                    reject()
                })
            })
        },
        profile({ commit }) {
            return new Promise(function (resolve, reject) {
                axios.get('/user/profile').then(response => {
                    commit('SET_PROFILE', response)
                    resolve()
                }).catch(error => {
                    reject()
                })
            })
        },
        refreshToken({ commit }, token) {
            return new Promise(function (resolve, reject) {
                commit('refreshToken', token)
            })
        },
        logout({ commit }) {
            return new Promise(function (resolve, reject) {
                axios.delete('/user/logout').then(response => {
                    commit('LOGOUT')
                    resolve()
                }).catch(error => {
                    reject()
                })
            })
        }
    }
})

export default store