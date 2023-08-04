const provincesUrl = 'https://apis.datos.gob.ar/georef/api/provincias'

const getProvinces = async () => {
    try {
        let response = await fetch(provincesUrl)
        response = await response.json()
        return response.provincias;
    } catch (error) {
        console.log(error);
    }
}

export default { getProvinces }