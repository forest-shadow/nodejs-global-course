const API_BASE = '/api'

const USER = '/user'
const USER_BASE = API_BASE + USER

export default {
  USER: {
    BASE: USER_BASE,
    BY_ID: USER_BASE + '/:id',
    SUGGEST: USER_BASE + '/suggest'
  }
}
