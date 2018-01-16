import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: process.env.PORT ? 'https://medfindback.herokuapp.com/api/' : 'http://localhost:3000/api/'
  })
}
