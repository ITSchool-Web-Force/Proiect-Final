import { ExpressionWidget } from "../components/container/sidebar/ExpressionWidget";

import styles from "../styles/container/sidebar.module.scss";

function Sidebar() {

    return <>
        <div className={styles.sidebar}>
            <ExpressionWidget/>
            <div className={styles.addExpression}>
                <h2>Poți contribui și tu la acest dicționar</h2>
                <a href="/add" className={styles.addButton}>Adaugă o expresie</a>
            </div>
        </div>
    </>
}
    
export { Sidebar }