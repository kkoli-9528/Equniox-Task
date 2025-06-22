import { useTheme } from '../contexts/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs';
import styles from './ThemeToggle.module.css';

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleDarkMode}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <div className={`${styles.toggleTrack} ${isDarkMode ? styles.dark : styles.light}`}>
        <div className={`${styles.toggleThumb} ${isDarkMode ? styles.thumbDark : styles.thumbLight}`}>
          {isDarkMode ? (
            <BsMoon className={styles.icon} />
          ) : (
            <BsSun className={styles.icon} />
          )}
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;