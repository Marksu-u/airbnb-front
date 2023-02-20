import React from "react";
import Link from "next/link";
import styles from "./Card.module.scss";

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card__image}>
                <img src="https://resize.elle.fr/square/var/plain_site/storage/images/deco/reportages/city-guide/location-appartement-paris/maison-contemporaine-a-paris/83573072-1-fre-FR/Maison-contemporaine-a-Paris.jpg" />
            </div>
            <div className={styles.card__info}>
                <div className={styles.card__info__title}>
                    <h3>Paris, France</h3>
                </div>
                <div className={styles.card__info__description}>
                    <p>
                        4 personnes · 2 chambres · 2 lits · 1 salle de bain
                    </p>
                    <p>
                        Wifi · Cuisine · Parking · Climatisation
                    </p>
                    <p>
                        143€ / nuit
                    </p>
                </div>
                <div className={styles.card__info__rating}>
                    <div className={styles.card__info__rating__stars}>
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;