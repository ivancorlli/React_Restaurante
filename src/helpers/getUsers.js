import Axios from 'axios'

export const getUsers = async() => {
    try{
     let data = await Axios({
        url: 'http://localhost:5000/api/users',
        method: "GET",
        headers:{
          "content-type": "application/json",
        },
        withCredentials:true,
      },   
    )
        return data;
      } catch (err) {
        return err.response.data;
      }
    
  }

