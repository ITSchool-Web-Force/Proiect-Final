import styles from "../../styles/container/modal.module.scss";

function Modal({message}) {
    return <>
        <div className={styles.successPopup}>
            <p>{message}</p>
        </div>
    </>
}
    
export { Modal }