import styles from "../../../styles/container/expresionwidget.module.scss";

function ExpressionWidget() {
    return <>
            <div className={styles.expressionWidget}>
                <h2>Expresia zilei</h2>
                <div className={styles.expressionCardButton}>
                    <div className={styles.expressionCard}>
                        <div className={styles.firstRow}>
                            <div className={styles.expression}>
                                EXPRESIE 5
                            </div>
                        </div>
                        <div className={styles.explication}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        </div>
                        <div className={styles.example}>
                            Persoana: Am folosit o expresie. Îți place?
                        </div>
                        <div className={styles.cardInfo}>adăugat de 
                            <span className={styles.author}> Iustin</span>
                        </div>               
                    </div>
                </div>
            </div>
    </>
}
    
export { ExpressionWidget }