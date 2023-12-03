import '../../index.css';
import { useState } from 'react';
import Card from "../../components/Card/Card";

function Home() {

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
                <i class="fa-solid fa-users"></i>
                <span>Usuarios</span>
            </div>
            <div className="dashboard-card-row">
                <Card
                    title={"Usuarios totales registrados"}
                    data={100}
                    icon={<i class="fa-solid fa-user-group"></i>}
                />
                <Card
                    title={"Usuarios nuevos (registrados en los últimos 30 días)"}
                    data={30}
                    icon={<i class="fa-solid fa-user-plus"></i>}
                />
                <Card
                    title={"Porcentaje de compradores sobre registrados"}
                    data={"30% (20)"}
                    icon={<i class="fa-solid fa-percent"></i>}
                />
                <Card
                    title={"Usuarios activos (han visitado la página en los últimos 30 días)"}
                    data={45}
                    icon={<i class="fa-solid fa-user-check"></i>}
                />
                <Card
                    title={"Usuarios dados de baja"}
                    data={4}
                    icon={<i class="fa-solid fa-user-minus"></i>}
                />
                <Card
                    title={"Región de origen predominante"}
                    data={"Córdoba"}
                    icon={<i class="fa-solid fa-map-location-dot"></i>}
                />
            </div>
        </div>
    )
}

export default Home;