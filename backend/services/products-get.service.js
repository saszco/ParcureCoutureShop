import getProductsData from "../db/products-get.db.js";

const fetchProductsData = async () => {
    try{
        return await getProductsData();
    }catch(error){
        throw new Error(error.message);
    }
}

export default fetchProductsData;