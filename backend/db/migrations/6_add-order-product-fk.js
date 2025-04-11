const addOrderProductFk = `
    DO $$
    BEGIN
        IF NOT EXISTS (
            SELECT 1 FROM information_schema.table_constraints
            WHERE constraint_name = 'fk_order_product_order'
        ) THEN
            ALTER TABLE order_product
            ADD CONSTRAINT fk_order_product_order
            FOREIGN KEY (order_id)
            REFERENCES orders(id)
            ON DELETE CASCADE;
        END IF;

        IF NOT EXISTS (
            SELECT 1 FROM information_schema.table_constraints
            WHERE constraint_name = 'fk_order_product_product'
        ) THEN
            ALTER TABLE order_product
            ADD CONSTRAINT fk_order_product_product
            FOREIGN KEY (product_id)
            REFERENCES products(id)
            ON DELETE CASCADE;
        END IF;

        IF NOT EXISTS (
            SELECT 1 FROM information_schema.table_constraints
            WHERE constraint_name = 'pk_order_product'
        ) THEN
            ALTER TABLE order_product
            ADD CONSTRAINT pk_order_product
            PRIMARY KEY (order_id, product_id);
        END IF;
    END $$;
`;

export default addOrderProductFk;

