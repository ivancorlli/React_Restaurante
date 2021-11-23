import Axios from 'axios'

export const getMenus = async() => {
    try{
     let data = await Axios({
        url: 'http://localhost:5000/api/menu',
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