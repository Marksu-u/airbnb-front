import React from "react";
import { useState } from "react";
import Link from "next/link";
import styles from "./SearchBar.module.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faTimes } from '@fortawesome/free-solid-svg-icons'

const SearchBar = () => {
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(true);
    };

    return (
        <>
        <button className={styles.searchButton} onClick={handleShowModal}>
          <div className={styles.bar}>
            <div className={styles.bar__list}>
              <div className={styles.bar__item}>N'importe où</div>
              <div className={styles.bar__item}>Une Semaine</div>
              <div className={styles.bar__item}>Ajouter des voyageurs</div>
              <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.faSearch}/>
            </div>
          </div>
        </button>
        {showModal && <SearchModal onClose={() => setShowModal(false)} />}
      </>
    );
};

const SearchModal = ({ onClose }) => {
    // Add your modal code here
    return (
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <div className={styles.modalContent}>
          {/* Add your search form and results here */}
        </div>
      </div>
    );
  };

export default SearchBar;