import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons';

const MenuItem = ({menu, delMenu}) => {
    return (
        <>  
            <div className='col-12 col-sm-6 col-lg-4'>
                <div className="card m-3" >
                    <img src={menu.imagen} className="card-img-top" alt={menu.nombre}/>
                    <div className="card-body">
                        <h4>{menu.nombre}</h4>
                        <p className="card-text text-black-50">{menu.descripcion}</p>
                        <div className='d-flex justify-content-between'>
                        <span className='m5 fw-bold text-primary'>{menu.categoria}</span>
                        <span className='m5 fw-bold'>$ {menu.precio}</span>
                        </div>
                    </div>

                    <div className="d-flex justify-content-evenly">
                    <button type="button" className="btn fs-4" onClick={()=>delMenu(menu._id)} >
                        <FontAwesomeIcon className="text-danger"  icon={faTrashAlt} />
                    </button>
                    <button type="button" className="btn fs-4" onClick={()=>console.log(menu._id)} >
                        <FontAwesomeIcon className="text-primary"  icon={faEdit} />
                    </button>
                   </div>
                </div>
            </div>
        </>
    )
}

export default MenuItem
