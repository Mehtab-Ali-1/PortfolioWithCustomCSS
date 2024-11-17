import Link from "next/link";
import Image from "next/image";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <main className={styles.mainContainer}>
            <div>
                <Header/>
            </div>
            {/* icons */}
            <div className={styles.iconsContainer}>
                <div className={styles.socialIcons}>
                    <Link href="https://www.linkedin.com/in/mehtab-ali-561651301/"><Linkedin className={`${styles.icon} ${styles.linkedin}`}/></Link>
                    <Link href="https://www.instagram.com/mehtab_ali_011___/?next=%2Fproud.mp%2Ffeed%2F"><Instagram className={`${styles.icon} ${styles.instagram}`}/></Link>
                    <Link href="#"><Twitter className={`${styles.icon} ${styles.twitter}`}/></Link>
                    <Link href="https://www.facebook.com/profile.php?id=100024441846165"><Facebook className={`${styles.icon} ${styles.facebook}`}/></Link>
                    <Link href="https://github.com/Mehtab-Ali-1"><Github className={`${styles.icon} ${styles.github}`}/></Link>
                </div>
                <div className={styles.contentContainer}>
                    <h1 className={styles.title}>Mehtab Ali</h1>
                    <h1 className={styles.title}>Web Developer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Asperiores pariatur nesciunt quidem ducimus aut ratione quo <br /> fugit vero doloremque neque?</p>
                    <p className={styles.learnMoreContainer}>
                        <Link className={styles.learnMoreButton} href="/">Learn More</Link>
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <Image className={styles.profileImage} src="/public/mehtab.jpg" alt="ProfileImage" height={500} width={300}/>
                </div>
            </div>
            {/* about me */}
            <div className={styles.aboutSection}>
                <h1 className={styles.aboutTitle}>About Me</h1>
                <p>Lorem ipsum dolor sit amet elit. Quaerat, facilis?</p>
            </div>
            <div className={styles.aboutContent}>
                <div className={styles.aboutText}>
                    <div className={styles.aboutTextContent}>
                        <h1 className={styles.aboutHeading}>Developing with a Passion While Exploring The World</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores, placeat repellat? Aut eos harum maiores non nihil magnam delectus illum, tempora molestias laudantium, provident explicabo corporis placeat nesciunt soluta voluptatum accusantium eaque?</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className={styles.contactButtonContainer}>
                        <Link className={styles.contactButton} href="#">Contact Me</Link>
                    </div>
                </div>
                <div className={styles.aboutText}>
                    <div className={styles.aboutTextContent}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In pariatur facere ullam porro, aperiam nihil! Omnis molestias nisi, itaque ut necessitatibus accusantium qui vel nam.
                        </p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus, ut.</p>
                    </div>
                    
                    <div className={styles.laptopImageContainer}>
                        <Image className={styles.laptopImage} src="/public/laptopImage.jpg" alt="webImage" width={300} height={200}/>
                    </div>
                </div>
            </div>
            {/* footer  */}
            <div className={styles.footerSpacer}></div>
            <Footer/>
        </main>
    )
}