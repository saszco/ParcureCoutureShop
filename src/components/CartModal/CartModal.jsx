import { useRef, useImperativeHandle, forwardRef, useState } from "react";
import { createPortal } from "react-dom";
import { Modal, Button } from "antd";
import styles from "./CartModal.module.css";

const CartModal = forwardRef(function ({ title }, ref) {
  const [isOpen, setIsOpen] = useState(false);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => set,
  }));

  return createPortal(
    <Modal
      open={isOpen}
      onCancel={() => setIsOpen(false)}
      footer={[
        <Button key="back" onClick={() => setIsOpen(false)}>
          Back to shop
        </Button>,
        <Button key="submit" color="primary" variant="solid">
          Continue
        </Button>,
      ]}
    >
      <div className={styles.modal_logo}>
        <img src="/birkin-logo.png" />
        <h2>Your Cart</h2>
      </div>
    </Modal>,
    document.getElementById("modal")
  );
});

export default CartModal;
