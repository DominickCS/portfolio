import Image from "next/image";
import Header from "../components/header.jsx";
import Navbar from "../components/navbar.jsx";
import styles from "../styles/index.module.css";
import jslogo from "../public/js.svg";
import pylogo from "../public/python.png";
import jvlogo from "../public/java.png";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div>
        <Header
          title="Hello! I am Dominick 👋"
          subtitle="A highly motivated web developer!"
        />
      </div>
      <div className={styles.containerTitle}>
        <h1>Language Proficiencies</h1>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardOne}>
          <Image src={jslogo} />
        </div>
        <div className={styles.cardTwo}>
          <Image src={pylogo} />
        </div>
        <div className={styles.cardThree}>
          <Image src={jvlogo} />
        </div>
      </div>
    </div>
  );
}
