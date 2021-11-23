
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
                <div class="card m-3" >
                    <img src={menu.imagen} class="card-img-top" alt={menu.name}/>
                    <div class="card-body">
                        <h4>{menu.name}</h4>
                        <p class="card-text text-black-50">{menu.descripcion}</p>
                        <div className='d-flex justify-content-between'>
                        <span className='m5 fw-bold text-primary'>{menu.categoria}</span>
                        <span className='m5 fw-bold'>$ {menu.precio}</span>
                        </div>
                    </div>

                    <div class="dropdown">
                        <button class="btn " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            BUTTONS CLICK
                        </button>
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><button type='button' class="text-danger">Eliminar</button></li>
                            <li><button type="button" class="btn btn-warning">Editar</button></li>
                        </ul>
                   </div>
                </div>
            </div>
        </>
    )
}

export default MenuItem
