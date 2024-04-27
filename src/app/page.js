import styles from "./page.module.css";
import Header from "@/srccomponents/Header/Header";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <Header />
      </header>
      <main>
        <section id="about">
          <div className={`container ${styles.about_wrapper}`}>
            <div className={styles}>
              <h1 className={styles.text_container}>
                Sizning
                <div className={styles.animation}>
                  <div>
                    <div className={styles.animatedText}>loyihangizni</div>
                  </div>
                  <div>
                    <div className={styles.animatedText}>biznesingizni</div>
                  </div>
                  <div>
                    <div className={styles.animatedText}>g'oyangizni</div>
                  </div>
                </div>
              </h1>
              <h1 className={styles.intro_title}>
                rivojlantirish uchun mukammal <strong className={styles.strong}>'IT'</strong> yechimlar!
              </h1>
              <article className={styles.article}>
                Proektingizni 10-yildan ortiq tajribaga ega mutaxassislarga
                ishoning va qisqa muddatda yuqori muvofaqqiyatlarga erishing.
              </article>
              <button className={styles.contact_button}>
                Call now
              </button>
            </div>
            <div className={styles.images_container}>
              <div className={styles.image_column}>
                <div className={styles.image_wrapper1}>
                  <img src={"https://picsum.photos/id/73/160/100"} alt="Image" />
                </div>
                <div className={styles.image_wrapper1}>
                  <img src={"https://picsum.photos/id/7/180/200"} alt="Image" />
                </div>
                <div className={styles.image_wrapper1}>
                  <img src={"https://picsum.photos/id/4/200/100"} alt="Image" />
                </div>
              </div>
              <div className={styles.image_column}>
                <div>
                  <img src={"https://picsum.photos/id/13/200/150"} alt="Image" />
                </div>
                <div className={styles.image_wrapper2}>
                  <img src={"https://picsum.photos/id/25/200/150"} alt="Image" />
                </div>
                <div>
                  <img src={"https://picsum.photos/id/54/200/150"} alt="Image" />
                </div>
              </div>
              <div className={styles.image_column}>
                <div className={styles.image_wrapper2}>
                  <img src={"https://picsum.photos/id/56/180/230"} alt="Image" />
                </div>
                <div className={styles.image_wrapper2}>
                  <img src={"https://picsum.photos/id/63/200/190"} alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="partners">
          <div className="container">
            <h2>Bizga ishonch bildirganlar va muvofaqqiyatli topshiririlgan ishlar soni</h2>
          </div>
        </section>
      </main>
    </>
  );
}
