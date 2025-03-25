//INFO: в версии css-loader 7.0.0+ необходим именованный иморт
import * as styles from "./App.module.scss";

const App = () => {
    return (<div className={styles.app}>
        <h1>App.tsx</h1>
    </div>);
}
 
export default App;