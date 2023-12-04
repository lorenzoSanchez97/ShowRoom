import '../../index.css';
import { useState } from 'react';
import Card from "../../components/Card/Card";

function Categories() {

    const [cantidadUsuarios, setCantidadUsuarios] = useState(0)
    const [cantidadProductos, setCantidadProductos] = useState(0)
    const [cantidadCategorias, setCantidadCategorias] = useState(0)

    // let fetchCardsInfo = () => {
    //     // Fetch de Número de Usuarios
    //     fetch('http://localhost:3000/api/users')
    //         .then(res => res.json())
    //         .then((data) => {
    //             setCantidadUsuarios(data.meta.count)
    //         })

    //     // Fetch de Número de Productos
    //     fetch('http://localhost:3000/api/products')
    //         .then(res => res.json())
    //         .then((data) => {
    //             setCantidadProductos(data.meta.count) //Cantidad de Productos

    //             const cantidadCategorias = Object.keys(data.meta.countByCategory).length;
    //             setCantidadCategorias(cantidadCategorias) //Cantidad de Categorias
    //         })
    // }


    // React.useEffect(() => {
    //     fetchCardsInfo()
    // }, [])

    return (
        <div className='dashboard-main-container'>
            <div className='dasboard-title-container'>
                <i class="fa-solid fa-list-ul"></i>
                <span>Categorias</span>
            </div>
            <div className="dashboard-card-row">
                <Card
                    title={"Categorias totales"}
                    data={4}
                    icon={<i class="fa-solid fa-list-ul"></i>}
                />
                <Card
                    title={"Categorias"}
                    data={"Mascarillas, Depilación, Maquillaje, Accesorios"}
                    icon={<i class="fa-solid fa-list-ul"></i>}
                />
            </div>
        </div>
    )
}

export default Categories;