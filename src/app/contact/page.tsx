import { IoIosArrowForward } from "react-icons/io";
import { MdPhoneAndroid, MdOutlineMapsHomeWork, MdOutgoingMail } from "react-icons/md";
import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Contact.module.css";

export default function Contact() {
    return (
        <main className={styles.mainContainer}>
            <div className={styles.heroSection}>
                <Header />
                <div className={styles.heroTitle}>
                    <h1>Contact Me</h1>
                </div>
            </div>
            
            {/* contact cards */}
            <div className={styles.contactCardsContainer}>
                <div className={styles.contactCard}>
                    <MdPhoneAndroid className={styles.contactIcon} />
                    <p>+92-310-2243748</p>
                    <p>Monday-Friday / 7AM-5PM</p>
                </div>
                <div className={styles.contactCard}>
                    <MdOutlineMapsHomeWork className={styles.contactIcon} />
                    <p>London United Kingdom</p>
                    <p>Rosemaed, UK 91117</p>
                </div>
                <div className={styles.contactCard}>
                    <MdOutgoingMail className={styles.contactIcon} />
                    <p>ma8317076@gmail.com</p>
                    <p>Contact me everytime</p>
                </div>
            </div>
            
            {/* form & message */}
            <div className={styles.formMessageContainer}>
                {/* form  */}
                <div className={styles.formContainer}>
                    <h1 className={styles.formTitle}>Get In Touch</h1>
                    <input className={styles.formInput} type="text" placeholder="Enter your name" />
                    <input className={styles.formInput} type="email" placeholder="Enter email address" />
                    <textarea className={styles.formTextarea} placeholder="Enter your Message"></textarea>
                    <button className={styles.formButton} type="button">Send Message</button>
                </div>
                
                {/* message  */}
                <div className={styles.messageContainer}>
                    <h1 className={styles.messageTitle}>Message Me</h1>
                    <p className={styles.messageText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, error atque. Soluta ipsum ab quas amet architecto optio dolorum fuga? Mollitia distinctio autem laboriosam a aliquid nulla debitis molestias magnam!</p>
                    <div className={styles.socialIconsContainer}>
                        <Link href="https://github.com/Mehtab-Ali-1"><Github className={`${styles.socialIcon} ${styles.github}`}/></Link>
                        <Link href="https://www.linkedin.com/in/mehtab-ali-561651301/"><Linkedin className={`${styles.socialIcon} ${styles.linkedin}`}/></Link>
                        <Link href="https://www.instagram.com/mehtab_ali_011___/?next=%2Fproud.mp%2Ffeed%2F"><Instagram className={`${styles.socialIcon} ${styles.instagram}`}/></Link>
                        <Link href="#"><Twitter className={`${styles.socialIcon} ${styles.twitter}`}/></Link>
                        <Link href="https://www.facebook.com/profile.php?id=100024441846165"><Facebook className={`${styles.socialIcon} ${styles.facebook}`}/></Link>
                    </div>
                </div>
            </div>
            <div className={styles.footerSpacer}></div>
            <Footer/>
        </main>
    )
}