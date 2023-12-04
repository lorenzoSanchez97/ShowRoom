import '../../index.css';
import { useState } from 'react';
import Card from "../../components/Card/Card";

function Sales() {

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
                <i class="fa-solid fa-truck-ramp-box"></i>
                <span>Ventas</span>
            </div>
            <div className="dashboard-card-row">
                <Card
                    title={"Ventas totales"}
                    data={220}
                    icon={<i class="fa-solid fa-truck-ramp-box"></i>}
                />
                <Card
                    title={"Ingresos totales"}
                    data={"$50000"}
                    icon={<i class="fa-solid fa-wallet"></i>}
                />
                <Card
                    title={"Ventas el último mes"}
                    data={35}
                    icon={<i class="fa-solid fa-truck-ramp-box"></i>}
                />
                <Card
                    title={"Ingresos del último mes"}
                    data={"$10000"}
                    icon={<i class="fa-solid fa-wallet"></i>}
                />
                <Card
                    title={"Variación en las ventas en relación al mes pasado"}
                    data={"+2%"}
                    icon={<i class="fa-solid fa-percent"></i>}
                />
                <Card
                    title={"Promedio de productos por venta"}
                    data={"2"}
                    icon={<i class="fa-solid fa-box"></i>}
                />
                <Card
                    title={"Principal destino"}
                    data={"Córdoba"}
                    icon={<i class="fa-solid fa-map-location-dot"></i>}
                />
            </div>
        </div>
    )
}

export default Sales;