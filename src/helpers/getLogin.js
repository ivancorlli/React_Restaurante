import Axios from 'axios'


const getLogin = async (user,pass) => {
  let string = new URLSearchParams();
  string.append("email", `${user}`);
  string.append("password", `${pass}`);
  try{
   let {data} = await Axios({
      url: 'http://localhost:5000/api/login',
      method: "POST",
      headers: { 
      "content-type": "application/x-www-form-urlencoded",
    },
      withCredentials:true,
      data: string,
    },   
  )
    return data;
  } catch (err) {
    let error =err.response.data
     return error
    }
  
}

export default getLogin
