import Axios from 'axios'


const createMenu = async (form) => {
    const {nombre,categoria,precio,imagen,descripcion} = form
  let string = new URLSearchParams();
  string.append("nombre", `${nombre}`);
  string.append("categoria", `${categoria}`);
  string.append("precio", `${precio}`);
  string.append("imagen", `${imagen}`);
  string.append("descripcion", `${descripcion}`);
  try{
   let {data} = await Axios({
      url: 'http://localhost:5000/api/menu',
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

export default createMenu