import styles from "../styles/container/svg.module.scss";

const ReportSvg = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path d="M0 0h24v24H0z"/>
        <path
            className={styles.svg}
            d="M7.107 2.879A3 3 0 0 1 9.228 2h5.544a3 3 0 0 1 2.12.879l4.23 4.228A3 3 0 0 1 22 9.228v5.544a3 3 0 0 1-.879 2.12l-4.228 4.23a3 3 0 0 1-2.121.878H9.228a3 3 0 0 1-2.12-.879l-4.23-4.228A3 3 0 0 1 2 14.772V9.228a3 3 0 0 1 .879-2.12l4.228-4.23ZM13 8a1 1 0 1 0-2 0v5a1 1 0 1 0 2 0V8Zm0 7.989a1 1 0 1 0-2 0V16a1 1 0 1 0 2 0v-.011Z"
        />
    </svg>
)
export default ReportSvg
