const createOrderTable = `
    CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        client_id INTEGER NOT NULL,
        date TIMESTAMPTZ NOT NULL
    );
`;

export default createOrderTable;