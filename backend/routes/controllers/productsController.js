import db from '../../db/database.js';

const getProductsData = async () => {
    const query = `
        SELECT * FROM products
    `;
    try {
        const result = await db.query(query);
        return result.rows;
    }catch (error) {
        console.error('Error fetching product data:', error);
    }
};

export default getProductsData;