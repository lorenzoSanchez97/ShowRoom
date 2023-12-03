import './DashboardHome.css';
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
                <i class="fa-solid fa-chart-pie"></i>
                <span>Dashboard</span>
            </div>
            <div className="dashboard-home-card-row">
                <Card
                    title={"Usuarios registrados"}
                    data={20}
                    icon={<i class="fa-solid fa-users"></i>}
                />
                <Card
                    title={"Productos en venta"}
                    data={30}
                    icon={<i class="fa-solid fa-boxes-stacked"></i>}
                />
                <Card
                    title={"Categorias"}
                    data={4}
                    icon={<i class="fa-solid fa-list-ul"></i>}
                />
                <Card
                    title={"Ventas totales"}
                    data={100}
                    icon={<i class="fa-solid fa-check"></i>}
                />
            </div>
        </div>
    )
}

export default Home;