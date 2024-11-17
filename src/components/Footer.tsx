import { Facebook, Github, Instagram, Linkedin, Twitter } from 'lucide-react';
import Link from "next/link";
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.foot}>
      <div className={styles.footContent}>
        <div className={styles.logo}>
          <h1 className={styles.logoText}>MA</h1>
        </div>
        <div className={styles.socialIcons}>
          <ul>
            <li>
              <Link href="https://www.instagram.com/mehtab_ali_011___/?next=%2Fproud.mp%2Ffeed%2F">
                <Instagram className={styles.instagramIcon} />
              </Link>
            </li>
            <li>
              <Link href="https://www.facebook.com/profile.php?id=100024441846165">
                <Facebook className={styles.facebookIcon} />
              </Link>
            </li>
            <li>
              <Link href="http://twitter.com/">
                <Twitter className={styles.twitterIcon} />
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/mehtab-ali-561651301/">
                <Linkedin className={styles.linkedinIcon} />
              </Link>
            </li>
            <li>
              <Link href="https://github.com/Mehtab-Ali-1">
                <Github className={styles.githubIcon} />
              </Link>
            </li>
          </ul>
        </div>
        <div className={styles.email}>
          <h1>ma8317076@gmail.com</h1>
        </div>
      </div>
      <hr className={styles.footerDivider} />
      <div className={styles.baseLine}>
          <p className={styles.allRightLine}>© {new Date().getFullYear()} Mehtab Ali. All rights reserved.</p>
          <div className={styles.privacyLine}>
            <Link href="/privacy" className={styles.privacy}>Privacy Policy</Link>
            <Link href="/terms" className={styles.terms}>Terms of Service</Link>
          </div>
      </div>

    </footer>
  );
}
