import Axios from 'axios'

export const delUser = async(id) => {
    try{
     let data = await Axios({
        url: `http://localhost:5000/api/users/${id}`,
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