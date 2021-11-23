import MenuItem from "./MenuItem"
import {useState, useEffect} from 'react'
import { getMenus } from "../../../../helpers/getMenus"
import createMenu from "../../../../helpers/createMenu"


const initialForm = {
    nombre:'',
    categoria:'',
    descripcion:'',
    precio:'',
    imagen:'',
}

const Menus = () => {
    const [form, setForm]= useState(initialForm)
    const [menus, setMenus] = useState(null)
    const [info, setInfo] = useState(null)


    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]:e.target.value,
          });
    }

    async function handleSubmit(e){
        e.preventDefault();
        await createMenu(form)
        setForm(initialForm);
    }
    async function fetchData(){
        let response = await  getMenus();
        let {data} = response;
        if(data && data.ok){
            setMenus(data.menus)
        }else{
            setInfo({
                ok:response.ok,
                msg: response.msg
            })
        }
    }

    useEffect(() => {
        fetchData()
        return () => {}
    }, [])

    return (
        <>
            <div className='container  my-3'>
                <div className='row my-1 p-3'>
                <form className="d-flex  justify-content-center">
                <input className="form-control m-1 w-50" type="search" placeholder="Buscar menu" aria-label="Search"/>
                <div className=" ms-4 d-flex">
                <button className="btn btn-outline-success m-1" type="button" data-bs-toggle="modal" data-bs-target="#crearMenu" >Crear</button>
                </div>
                 </form> 
                </div>
                    {/* Vista de los menus */}
                    <div className='container my-4'>
                        <div className='row justify-content-center'>
                    {
                        info ? <h2>{info.msg}</h2>
                        :
                        menus ?
                        menus.map(menu=><MenuItem menu={menu} key={menu._id}/>)
                        : <div></div>

                    }
                        </div>
                    </div>
                
            </div>

                {/* <!-- Modal --> */}
                <div className="modal fade" id="crearMenu" tabIndex="-1" aria-labelledby="crearMenuLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <span className="modal-title" id="crearMenuLabel">Crear Menu</span>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit} className='d-flex flex-column p-3'>
                            <input type='text' onChange={handleChange} name='nombre' value={form.nombre} placeholder='nombre' className='my-2 form-control' />
                            <input type='text' onChange={handleChange} name='categoria' value={form.categoria} placeholder='categoria' className='my-2 form-control'/>
                            <input type='text' onChange={handleChange} name='precio' value={form.precio} placeholder='precio' className='my-2 form-control'/>
                            <input type='text' onChange={handleChange} name='imagen' value={form.imagen} placeholder='imagen' className='my-2 form-control'/>
                            <textarea type='text' onChange={handleChange} name='descripcion' value={form.descripcion} placeholder='descripcion' className='my-2 form-control'></textarea>
                            <div className="d-flex justify-content-evenly my-3">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <input type="submit" className="btn btn-primary" value='Crear'/>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
        </>
    )
}

export default Menus
