import styles from "./App.module.css";
import HeaderInfo from "./components/HeaderInfo";
import RightSection from "./components/RightSection";
import Tabs from "./components/Tabs";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className={styles.mainContainer}>
        <HeaderInfo />
        <div
          style={{
            display: "flex",
            gap: "50px",
          }}
        >
          <Tabs />
          <RightSection />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;