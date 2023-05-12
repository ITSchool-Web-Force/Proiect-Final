import dayjs from 'dayjs';

import { useState, useEffect } from "react";

import styles from "../../../styles/container/expresionwidget.module.scss";

function ExpressionWidget() {


    return <>
            <div className={styles.expressionWidget}>
                <h2>Expresia săptămânii</h2>
            </div>
    </>
}
    
export { ExpressionWidget }