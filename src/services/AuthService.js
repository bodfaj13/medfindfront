import Api from './Api'

export default {
  registerUser (credentials) {
    return Api().post('registeruser', credentials)
  },
  loginAdmin (credentials) {
    return Api().post('login', credentials)
  }
}
