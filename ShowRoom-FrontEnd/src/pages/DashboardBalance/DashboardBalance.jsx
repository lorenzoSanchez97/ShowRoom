import '../../index.css';
import { useState } from 'react';
import Card from "../../components/Card/Card";

function FinancialBalance() {

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
                <i class="fa-solid fa-chart-column"></i>
                <span>Balance</span>
            </div>
            <div className="dashboard-card-row">
                <Card
                    title={"Ingresos totales por ventas"}
                    data={"$50000"}
                    icon={<i class="fa-solid fa-truck-ramp-box"></i>}
                />
                <Card
                    title={"Ingresos totales por publicidad"}
                    data={"$10000"}
                    icon={<i class="fa-solid fa-sack-dollar"></i>}
                />
                <Card
                    title={"Ingresos por ventas en el último mes"}
                    data={"$15000"}
                    icon={<i class="fa-solid fa-truck-ramp-box"></i>}
                />
                <Card
                    title={"Ingresos por publicidad en el último mes"}
                    data={"$10000"}
                    icon={<i class="fa-solid fa-wallet"></i>}
                />
                <Card
                    title={"Egresos para compra de productos"}
                    data={"$20000"}
                    icon={<i class="fa-solid fa-percent"></i>}
                />
                <Card
                    title={"Egresos para pago de envíos"}
                    data={"$10000"}
                    icon={<i class="fa-solid fa-box"></i>}
                />
                <Card
                    title={"Egresos varios"}
                    data={"$1000"}
                    icon={<i class="fa-solid fa-box"></i>}
                />
                <Card
                    title={"Balance final total"}
                    data={"+25000"}
                    icon={<i class="fa-solid fa-map-location-dot"></i>}
                />
                <Card
                    title={"Balance final último mes"}
                    data={"+5000"}
                    icon={<i class="fa-solid fa-map-location-dot"></i>}
                />
                <Card
                    title={"Variación de la ganancia en el último mes"}
                    data={"+2,5%"}
                    icon={<i class="fa-solid fa-map-location-dot"></i>}
                />
            </div>
        </div>
    )
}

export default FinancialBalance;