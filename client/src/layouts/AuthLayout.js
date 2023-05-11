import styles from '@/layouts/AuthLayout.module.scss';


export default function Layout( { children }) {
    return (
        <div className={`flex h-screen ${styles['welcome-container']}`}>
            <div className="m-auto bg-slate-50 w-3/5 h-3/4 grid lg:grid-cols-2 auth-wrapper">
                <div className={`${styles['img-style']} hidden sm:block`}>
                    <div className={styles['img-hero']}></div>
                </div>
                <div className="right flex flex-col justify-evenly">
                    <div className="text-center py-10">
                        { children }
                    </div>
                </div>
            </div>
        </div>
    )
}