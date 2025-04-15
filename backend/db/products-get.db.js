import db from './database.js'

const getProductsData = async () => {
    const query = `
        SELECT * FROM products
    `
    try {
        const result = await db.query(query);
        return result.rows;
    }catch(error){
        throw new Error (error.message)
    }
}

export default getProductsData;