import axios from 'axios'

// This utility will add the authorized user's JWT to the request header
// any routes that are protected will require the JWT in order tp access them

const setAuthToken = token =>{
    if(token){
        //apply thet token to every request header
        axious.defaults.headers.common['Authorization']=token
        console.log(axios.defaults.headers.common)
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}
export default setAuthToken