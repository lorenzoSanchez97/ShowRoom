import '../../index.css';
import { useState } from 'react';
import Card from "../../components/Card/Card";

function Products() {

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
            <i class="fa-solid fa-boxes-stacked"></i>
                <span>Productos</span>
            </div>
            <div className="dashboard-card-row">
                <Card
                    title={"Productos en venta"}
                    data={50}
                    icon={<i class="fa-solid fa-boxes-stacked"></i>}
                />
                <Card
                    title={"Productos en oferta"}
                    data={20}
                    icon={<i class="fa-solid fa-arrow-trend-down"></i>}
                />
                <Card
                    title={"Total de productos vendidos"}
                    data={300}
                    icon={<i class="fa-solid fa-truck-ramp-box"></i>}
                />
                <Card
                    title={"Productos vendidos el último mes"}
                    data={20}
                    icon={<i class="fa-solid fa-truck-ramp-box"></i>}
                />
                <Card
                    title={"Producto más vendido"}
                    data={"Mascarilla de Coco"}
                    icon={<i class="fa-solid fa-ranking-star"></i>}
                />
                <Card
                    title={"Producto más vendido en el último mes"}
                    data={"Paleta de colores"}
                    icon={<i class="fa-solid fa-ranking-star"></i>}
                />
                <Card
                    title={"Productos sin stock"}
                    data={3}
                    icon={<i class="fa-solid fa-circle-xmark"></i>}
                />
            </div>
        </div>
    )
}

export default Products;