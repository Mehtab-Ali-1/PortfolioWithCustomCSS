import Link from "next/link";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
// import Progress from "../../components/ui/Progress";
import styles from "../../styles/About.module.css";
// import { Progress } from "@radix-ui/react-progress";
import { Progress } from "@/components/ui/progress"


export default function About() {
    return (
        <main className={styles.mainContainer}>
            {/* hero section */}
            <div className={styles.heroSection}>
                <Header />
                <div className={styles.heroTitle}>
                    <h1>About Me</h1>
                </div>
            </div>
            
            <div className={styles.contentSection}>
                {/* one */}
                <div className={styles.profileSection}>
                    <div className={styles.imageContainer}>
                        <Image className={styles.profileImage} src="/public/mehtab.jpg" alt="ProfileImage" height={300} width={200}/>
                    </div>
                    {/* two */}
                    <div className={styles.profileInfo}>
                        <h1 className={styles.profileTitle}>Designing With Passion While Exploring The World</h1>
                        <p className={styles.profileDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur laboriosam rem deleniti ipsa reiciendis! Mollitia minus consequuntur est, animi voluptatibus asperiores saepe accusantium ratione exercitationem praesentium corporis, quas fuga? Voluptate, praesentium molestiae pariatur quidem ducimus veniam!</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit exercitationem odit, quibusdam culpa est consectetur expedita repudiandae iusto maiores porro.</p>
                        <p className={styles.contactText}>Let`s talk with me.</p>
                        <Link className={styles.emailLink} href="#">ma8317076@gmail.com</Link>
                    </div>
                </div>
                {/* three */}
                <div className={styles.productSection}>
                    <h1 className={styles.productTitle}>I Create Products Not Just Arts</h1>
                    <p className={styles.productDescription}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur exercitationem praesentium corporis, quas fuga? Voluptate, praesentium molestiae pariatur quidem ducimus veniam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit exercitationem odit, quibusdam culpa est consectetur expedita repudiandae iusto maiores porro.</p>
                </div>
            </div>
            {/* experience lining*/}
            <div className={styles.experienceSection}>
                <div className={styles.experienceInfo}>
                    <h1 className={styles.experienceTitle}>Frontend and Backend Developer</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero voluptas labore reprehenderit dignissimos pariatur numquam consectetur beatae recusandae, officiis, non eveniet sapiente iste tempore, delectus maxime. Eaque ullam iure id? Totam maxime eaque quia! Explicabo et ut quisquam dignissimos, quod mollitia eos omnis expedita molestias? Hic voluptate saepe blanditiis rerum?</p>
                    <p><Link className={styles.downloadButton} href="#">Download CV</Link></p>
                </div>
                
                <div className={styles.skillsSection}>
                        <div className={styles.skillItem}>
                        <div className={styles.skillLabel}>HTML</div>
                        <Progress className="progress" value={80} />
                    </div>
                    <div className={styles.skillItem}>
                        <div className={styles.skillLabel}>CSS</div>
                        <Progress className="progress" value={53} />
                    </div>
                    <div className={styles.skillItem}>
                        <div className={styles.skillLabel}>TypeScript</div>
                        <Progress className="progress" value={60} />
                    </div>
                    <div className={styles.skillItem}>
                        <div className={styles.skillLabel}>NextJS</div>
                        <Progress className="progress" value={55} />
                    </div>
                    <div className={styles.skillItem}>
                        <div className={styles.skillLabel}>Tailwind CSS</div>
                        <Progress className="progress" value={80} />
                    </div>
                </div>
            </div>
            <div className={styles.footerSpacer}></div>
            <Footer/>
        </main>
    )
}