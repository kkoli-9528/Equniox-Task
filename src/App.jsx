import styles from "./App.module.css";
import HeaderInfo from "./components/HeaderInfo";

function App() {
  return (
    <div className={styles.mainContainer}>
      <HeaderInfo />
    </div>
  );
}

export default App;
