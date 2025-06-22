import styles from "./App.module.css";
import HeaderInfo from "./components/HeaderInfo";
import RightSection from "./components/RightSection";
import Tabs from "./components/Tabs";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <div className={styles.mainContainer}>
      <HeaderInfo />
      <div className={styles.innnerContainer}>
        <Tabs />
        <RightSection />
      </div>
    </div>
  );
}

export default App;
