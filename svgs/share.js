import styles from "../styles/container/svg.module.scss";

const ShareSvg = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path d="M0 0h24v24H0z" />
        <path
            className={styles.svg}
            d="M14 6a4 4 0 1 1 .983 2.627l-5.07 2.535a4.015 4.015 0 0 1 0 1.676l5.07 2.536S16.796 14 18 14a4 4 0 1 1-3.912 3.162l-5.071-2.535a4 4 0 1 1 0-5.253l5.07-2.536A4.017 4.017 0 0 1 14 6Z" 
        />
    </svg>
)
export default ShareSvg
