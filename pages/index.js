import Head from "next/head";
import Image from "next/image";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Davos List | Home</title>
        <meta name="keywords" content="Davos" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est
          culpa sit molestias in optio, laudantium ipsa harum similique maxime
          laborum laboriosam corporis alias molestiae fugit ab dolorem eius?
          Fugiat facere vel tempore deserunt vero, repudiandae maxime ipsum esse
          repellat similique tenetur, dicta itaque quidem libero beatae
          accusamus? Deleniti nesciunt sed inventore veniam necessitatibus vel
          beatae quae ipsam cupiditate magnam, magni voluptatem vero maxime
          commodi ex in doloremque reiciendis mollitia, soluta earum. Incidunt
          molestiae quas in provident ipsum beatae earum est quidem magnam nisi
          reiciendis iure minus, vitae voluptas dolor cupiditate quibusdam
          tempora fugiat impedit dolores nobis adipisci! Modi, ducimus?
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus est
          culpa sit molestias in optio, laudantium ipsa harum similique maxime
          laborum laboriosam corporis alias molestiae fugit ab dolorem eius?
          Fugiat facere vel tempore deserunt vero, repudiandae maxime ipsum esse
          repellat similique tenetur, dicta itaque quidem libero beatae
          accusamus? Deleniti nesciunt sed inventore veniam necessitatibus vel
          beatae quae ipsam cupiditate magnam, magni voluptatem vero maxime
          commodi ex in doloremque reiciendis mollitia, soluta earum. Incidunt
          molestiae quas in provident ipsum beatae earum est quidem magnam nisi
          reiciendis iure minus, vitae voluptas dolor cupiditate quibusdam
          tempora fugiat impedit dolores nobis adipisci! Modi, ducimus?
        </p>
        <Link href="/davos">
          <a className={styles.btn}>See Davo list</a>
        </Link>
      </div>
    </>
  );
}
