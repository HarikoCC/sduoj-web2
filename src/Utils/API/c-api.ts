import {thirdPartyLogin} from '../../Type/types'
import {forgetInfo, loginInfo, profileInfo, registerInfo, resetPassWord, verificationEmail} from "../../Type/types";
import request from "./request";


export default {
    // Config
    async getCopyright() {
        return request.get<string>('/site/getCopyright');
    },

    // User
    async login(data: loginInfo) {
        return request.post('/user/login', data)
    },
    async logout() {
        return request.get('/user/logout')
    },
    async register(data: registerInfo) {
        return request.post('/user/register', data)
    },
    async forgetPassword(data: forgetInfo) {
        return request.post('/user/forgetPassword', data)
    },
    async updateProfile(data: profileInfo) {
        return request.post('/user/updateProfile', data)
    },
    async sendVerificationEmail(data: verificationEmail) {
        return request.post('/user/sendVerificationEmail', data)
    },
    async resetPassword(data: resetPassWord) {
        return request.post('/user/resetPassword', data)
    },
    async thirdPartyLogin(data: thirdPartyLogin) {
        return request.get('/user/thirdPartyLogin', data)
    },
    async getProfile() {
        return request.get("/user/getProfile")
    },
    async rejudge(data: string[]) {
        return request.post("/submit/rejudge", data)
    },
    async getCaptcha() {
        return request.get("/user/getCaptcha")
    }
}
