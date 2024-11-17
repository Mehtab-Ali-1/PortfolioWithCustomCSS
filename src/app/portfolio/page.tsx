import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "../../styles/Portfolio.module.css";

export default function Portfolio() {
    return (
        <main className={styles.mainContainer}>
            {/* hero section */}
            <div className={styles.heroSection}>
                <Header />
                <div className={styles.heroContent}>
                    <ul className={styles.breadcrumb}>
                        <li><Link href="/home">Home</Link></li>
                        <li><IoIosArrowForward /></li>
                        <li className={styles.currentPage}>Portfolio</li>
                    </ul>
                </div>
            </div>
            
            {/* heading */}
            <div className={styles.heading}>
                <h1>Showcasing My Journey in Web Development</h1>
            </div>

            <div className={styles.projectsContainer}>
                {/* Project 1 */}
                <div className={styles.projectCard}>
                    <Image className={styles.projectImage} src="/public/cv.png" alt="CV" height={300} width={300}/>
                    <p className={styles.projectTitle}>My Resume</p>
                    <Link className={styles.viewButton} href="https://my-resume-w35x.vercel.app/">View</Link>
                </div>
                
                {/* Project 2 */}
                <div className={styles.projectCard}>
                    <Image className={styles.projectImage} src="/public/resumeBuilder.png" alt="CV" height={300} width={300}/>
                    <p className={styles.projectTitle}>Dynamic Resume Generator</p>
                    <Link className={styles.viewButton} href="https://resume-builder-qymw.vercel.app/">View</Link>
                </div>
                
                {/* Project 3 */}
                <div className={styles.projectCard}>
                    <Image className={styles.projectImage} src="/public/paymentForm.png" alt="CV" height={300} width={300}/>
                    <p className={styles.projectTitle}>Payment Form</p>
                    <Link className={styles.viewButton} href="https://payment-form-h34s.vercel.app/">View</Link>
                </div>
            </div>
            
            <div className={styles.largeProjectsContainer}>
                {/* Project 4 */}
                <div className={styles.projectCard}>
                    <Image className={styles.largeProjectImage} src="/public/figmaWebTravel.png" alt="CV" height={300} width={400}/>
                    <p className={styles.projectTitle}>Travel Agency Website</p>
                    <Link className={styles.viewButton} href="https://trave-agency-web-vdp4.vercel.app/">View</Link>
                </div>
                
                {/* Project 5 */}
                <div className={styles.projectCard}>
                    <Image className={styles.largeProjectImage} src="/public/countDownTimer.png" alt="CV" height={300} width={400}/>
                    <p className={styles.projectTitle}>Countdown Timer</p>
                    <Link className={styles.viewButton} href="https://count-down-timer-proj-c21z.vercel.app/">View</Link>
                </div>
            </div>
            
            <div className={styles.largeProjectsContainer}>
                {/* Project 6 */}
                <div className={styles.projectCard}>
                    <Image className={styles.largeProjectImage} src="/public/calculator.png" alt="CV" height={300} width={400}/>
                    <p className={styles.projectTitle}>Calculator</p>
                    <Link className={styles.viewButton} href="https://calculator-with-next-js.vercel.app/">View</Link>
                </div>
                
                {/* Project 7 */}
                <div className={styles.projectCard}>
                    <Image className={styles.largeProjectImage} src="/public/tictactoe.png" alt="ticTacToe" height={300} width={400}/>
                    <p className={styles.projectTitle}>Tic Tac Toe Game</p>
                    <Link className={styles.viewButton} href="https://tic-toc-toe-game-next-js.vercel.app/">View</Link>
                </div>
            </div>
            
            <div className={styles.footerSpacer}></div>
            <Footer/>
        </main>
    )
}