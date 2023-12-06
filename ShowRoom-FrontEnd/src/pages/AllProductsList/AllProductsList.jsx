import { useState, useEffect } from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ProductsList from "../../components/ProductsList/ProductsList";
import { getAllProducts } from "../../services/products";

function AllProductsList() {

    let [productsData, setProductsData] = useState([])

    const getProductsFromApi = async () => {
        try {
            let productsFromApi = await getAllProducts();
            setProductsData(productsFromApi)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getProductsFromApi();
    }, [])

    return (
        <section className="body-section">
            <main>
                <SectionTitle title={"Todos los productos"} />
                <section className="seccion-principal">
                    <ProductsList data={productsData} />
                </section>
            </main>
        </section>
    )
}

export default AllProductsList;