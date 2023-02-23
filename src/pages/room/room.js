import React from "react";

import CardDetails from "@/components/CardDetails/CardDetails";

import styles from "./room.module.scss";

const Room = ({ place }) => {
    return (
        <div className={styles.room}>
        <CardDetails place={place} />
        </div>
    );
};

export default Room;