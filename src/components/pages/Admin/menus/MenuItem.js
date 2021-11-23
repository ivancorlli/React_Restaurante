
const menu =
    {
        name:'hamburguesa',
        categoria:'snack',
        descripcion:'sdfgsdfgaskldjfalksdjfl;kasdjf;lkasdhjlkasjdflkhsgalsdkfgjfkdhgdfgsdgsdfgsdgsdfgsdfg',
        precio:6546,
        imagen:'https://previews.123rf.com/images/subbotina/subbotina1905/subbotina190500024/123093476-hamburguesa-y-doble-hamburguesa-con-queso-con-patatas-fritas-mesa-de-madera.jpg',
    }

const MenuItem = () => {
    return (
        <>  
            <div className='col-12 col-sm-6 col-lg-4'>
                <div className="card m-3" >
                    <img src={menu.imagen} className="card-img-top" alt={menu.name}/>
                    <div className="card-body">
                        <h4>{menu.name}</h4>
                        <p className="card-text text-black-50">{menu.descripcion}</p>
                        <div className='d-flex justify-content-between'>
                        <span className='m5 fw-bold text-primary'>{menu.categoria}</span>
                        <span className='m5 fw-bold'>$ {menu.precio}</span>
                        </div>
                    </div>

                    <div className="dropdown">
                        <button className="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            BUTTONS CLICK
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><button type='button' className="text-danger">Eliminar</button></li>
                            <li><button type="button" className="btn btn-warning">Editar</button></li>
                        </ul>
                   </div>
                </div>
            </div>
        </>
    )
}

export default MenuItem
