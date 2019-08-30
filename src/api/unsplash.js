import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID 18c25b773c677264b4e4afcd7662a7b70c75cd830af936d63e0ab231366e0756'

    }
})