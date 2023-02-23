import React from "react";
import styles from "./SearchModal.module.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const SearchModal = ({ onClose }) => {
    return (
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className={styles.modalContent}>
          Formulaire
        </div>
      </div>
    );
};

export default SearchModal;
