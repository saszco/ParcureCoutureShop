const addClientOrderFk = `
    DO $$
    BEGIN
        IF NOT EXISTS (
            SELECT 1 FROM information_schema.table_constraints
            WHERE constraint_name = 'fk_orders_clients'
        ) THEN 
            ALTER TABLE orders
            ADD CONSTRAINT fk_orders_clients
            FOREIGN KEY (client_id)
            REFERENCES clients(id);
        END IF;
    END $$;
`;

export default addClientOrderFk;