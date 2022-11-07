import styles from "../styles/Home.module.css";
import Navigator from "../component/navigator";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>SearchPage</div>
        <Navigator/>
      </main>
    </div>
  );
}
