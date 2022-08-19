import axios from 'axios'

const APP_ID='52a13862'
const APP_KEY='adbb01cf4cf4c156337855cd617cc12b'


export const getResponse=async(query)=>{
    const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
return await axios.get(url)
}