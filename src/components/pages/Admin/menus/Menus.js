import MenuItem from "./MenuItem"

const menus =[
    {
        name:'hamburguesa',
        categoria:'snack',
        descripcion:'sdfgsdfgaskldjfalksdjfl;kasdjf;lkasdhjlkasjdflkhsgalsdkfgjfkdhgdfgsdgsdfgsdgsdfgsdfg',
        precio:6546,
        imagen:'https://previews.123rf.com/images/subbotina/subbotina1905/subbotina190500024/123093476-hamburguesa-y-doble-hamburguesa-con-queso-con-patatas-fritas-mesa-de-madera.jpg',
    },
    {
        name:'hamburguesa',
        categoria:'snack',
        descripcion:'sdfgsdfgaskldjfalksdjfl;kasdjf;lkasdhjlkasjdflkhsgalsdkfgjfkdhgdfgsdgsdfgsdgsdfgsdfg',
        precio:6546,
        imagen:'https://previews.123rf.com/images/subbotina/subbotina1905/subbotina190500024/123093476-hamburguesa-y-doble-hamburguesa-con-queso-con-patatas-fritas-mesa-de-madera.jpg',
    },
    {
        name:'hamburguesa',
        categoria:'snack',
        descripcion:'sdfgsdfgaskldjfalksdjfl;kasdjf;lkasdhjlkasjdflkhsgalsdkfgjfkdhgdfgsdgsdfgsdgsdfgsdfg',
        precio:6546,
        imagen:'https://previews.123rf.com/images/subbotina/subbotina1905/subbotina190500024/123093476-hamburguesa-y-doble-hamburguesa-con-queso-con-patatas-fritas-mesa-de-madera.jpg',
    },
    {
        name:'hamburguesa',
        categoria:'snack',
        descripcion:'sdfgsdfgaskldjfalksdjfl;kasdjf;lkasdhjlkasjdflkhsgalsdkfgjfkdhgdfgsdgsdfgsdgsdfgsdfg',
        precio:6546,
        imagen:'https://previews.123rf.com/images/subbotina/subbotina1905/subbotina190500024/123093476-hamburguesa-y-doble-hamburguesa-con-queso-con-patatas-fritas-mesa-de-madera.jpg',
    },
    {
        name:'hamburguesa',
        categoria:'snack',
        descripcion:'sdfgsdfgaskldjfalksdjfl;kasdjf;lkasdhjlkasjdflkhsgalsdkfgjfkdhgdfgsdgsdfgsdgsdfgsdfg',
        precio:6546,
        imagen:'https://previews.123rf.com/images/subbotina/subbotina1905/subbotina190500024/123093476-hamburguesa-y-doble-hamburguesa-con-queso-con-patatas-fritas-mesa-de-madera.jpg',
    },
    {
        name:'hamburguesa',
        categoria:'snack',
        descripcion:'sdfgsdfgaskldjfalksdjfl;kasdjf;lkasdhjlkasjdflkhsgalsdkfgjfkdhgdfgsdgsdfgsdgsdfgsdfg',
        precio:6546,
        imagen:'https://previews.123rf.com/images/subbotina/subbotina1905/subbotina190500024/123093476-hamburguesa-y-doble-hamburguesa-con-queso-con-patatas-fritas-mesa-de-madera.jpg',
    },
]
const Menus = () => {
    return (
        <>
            <div className='container  my-3'>
                <div className='row my-1 p-3'>
                <form className="d-flex  justify-content-center">
                <input className="form-control m-1 w-50" type="search" placeholder="Buscar menu" aria-label="Search"/>
                <div className=" ms-4 d-flex">
                <button className="btn btn-outline-dark m-1" type="submit">Buscar</button>
                <button className="btn btn-outline-success m-1" >Crear</button>
                </div>
                 </form> 
                </div>
                    {/* Vista de los menus */}
                    <div className='container my-4'>
                        <div className='row justify-content-center'>
                    {
                        menus.map(menu=><MenuItem menu={menu}/>)
                    }
                        </div>
                    </div>
                
            </div>
        </>
    )
}

export default Menus
