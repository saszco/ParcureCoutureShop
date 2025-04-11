import db from '../database.js';

import createProductTable from './1_create-product-table.js';
import createClientTable from './2_create-client-table.js';
import createOrderTable from './3_create-order-table.js';
import createOrderProductTable from './4_create-order-product-table.js';
import addClientOrderFk from './5_add-client-order-fk.js';
import addOrderProductFk from './6_add-order-product-fk.js';

const runDbMigrations = async () => {
    console.log('Running database migrations...');

    //use single client for transaction
    const client = await db.connect();

    try{
        await client.query('BEGIN');

        await client.query(createProductTable);
        console.log('Product table created successfully');

        await client.query(createClientTable);
        console.log('Client table created successfully');

        await client.query(createOrderTable);
        console.log('Order table created successfully');

        await client.query(createOrderProductTable);
        console.log('OrderProduct table created successfully');

        await client.query(addClientOrderFk);
        await client.query(addOrderProductFk);
        console.log('Foreign keys added successfully');

        await client.query('COMMIT');
        console.log('Database migrations completed successfully');
    }catch (error) {
        await client.query('ROLLBACK');
        console.log('Error running database migrations:', error);
        throw error; 
    }finally {
        client.release();
        console.log('Database connection closed');
    }
}

export default runDbMigrations