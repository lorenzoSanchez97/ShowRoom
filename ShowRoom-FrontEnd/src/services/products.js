const getAllProducts = async () => {
    const productsApiUrl = "http://localhost:3000/products/list";
    try {
        let response = await fetch(productsApiUrl)
        response = await response.json();
        return response.data;
    } catch (error) {
        console.log(error);
    }
}

export { getAllProducts }