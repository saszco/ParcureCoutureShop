const createOrderProductTable = `
    CREATE TABLE IF NOT EXISTS order_product (
        order_id INTEGER NOT NULL,
        product_id INTEGER NOT NULL,
        quantity INTEGER NOT NULL
    );
`;

export default createOrderProductTable;