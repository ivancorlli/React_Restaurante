import Axios from 'axios'

export const delMenu = async(id) => {
    try{
     let data = await Axios({
        url: `http://localhost:5000/api/menu/${id}`,
        method: "DELETE",
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