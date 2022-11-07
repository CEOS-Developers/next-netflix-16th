import styles from "../styles/Home.module.css";
import Navigator from "../component/navigator";

export default function Detail() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div> DetailPage</div>
        <Navigator/>
      </main>
    </div>
  );
}
