import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/srccomponents/Header/Header";
import Counter from "@/srccomponents/Ui/Counter";
import Logo from "@/srccomponents/Ui/Logo";
import ItTime from "/public/ITtimeLogo.png";
import dezLogo from "/public/dez_logo.png";
import HomeKit from "/public/homekitLogo.png";
import Loyal from "/public/Loyal.png";
import NOITS from "/public/namanganOITS.jpg";
import abBuild from "/public/abBuild.jpg";
import avtozoomWeb from "/public/avtozoomWebsite.jpg";
import dezinfection from "/public/desinfection.jpg";
import homekit from "/public/homekit.jpg";
import itTime from "/public/itTime.jpg";
import loyalWebsite from "/public/loyalWebsite.jpg"
import noits from "/public/noits.jpg";
import propartnyor from "/public/propartnyor.jpg";
import zamonTour from "/public/zamonTour.jpg";
import Websites from "@/srccomponents/Ui/Websites";

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
          <div className={`container ${styles.partners_wrapper}`}>
            <Image src="/Limsa - Logotype 2.png"
              alt="Limsa Logo"
              width={250}
              height={60} />
            <h2 className={styles.partners_title}>Bizga ishonch bildirganlar va muvofaqqiyatli topshiririlgan ishlar soni</h2>

            <div className={styles.counter}>
              <Counter countEnd={500} text={"Complated projects"} />
              <Counter countEnd={20} text={"Clients"} />
            </div>
            <div className={styles.logos}>
              <Logo image={ItTime.src} text={"IT Time"} />
              <Logo image={dezLogo.src} text={"Dezinfeksiya Tashkent"} />
              <Logo image={HomeKit.src} text={"HomeKit"} />
              <Logo image={Loyal.src} text={"Loyal"} />
              <Logo image={NOITS.src} text={"Namangan OITS"} />
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="container">
            <h4 className={styles.projects_text_sm}>Our projects</h4>
            <h2 className={styles.projects_text_lg}>What we did</h2>

            <div className={styles.projects_wrapper}>
              <Websites image={abBuild} />
              <Websites image={avtozoomWeb} />
              <Websites image={dezinfection} />
              <Websites image={homekit} />
              <Websites image={itTime} />
              <Websites image={loyalWebsite} />
              <Websites image={noits} />
              <Websites image={propartnyor} />
              <Websites image={zamonTour} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
