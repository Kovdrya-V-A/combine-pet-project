import * as styles from './MainLoader.module.scss';

const MainLoader = () => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.loader}>
                <span className={styles.dots}>Loading</span>
            </span>
        </div>
    );
};

export default MainLoader;