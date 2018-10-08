import axios from 'axios'

const USER_URL = (process.env.NODE_ENV !== 'development')
    ? '/user'
    : '//localhost:3000/user';

async function addUser(user) {
    return await axios.post(USER_URL, user)
}



export default {
    addUser,
}