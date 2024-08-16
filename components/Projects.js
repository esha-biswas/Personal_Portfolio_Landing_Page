import styles from '../styles/Projects.module.css';
import Image from 'next/image';

export default function Projects() {
    return (
        <div className={styles.projects} id='p'>
            <div className={styles.proj}>My Projects</div>
            <div className={styles.lorem}>Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus</div>
            <div className={styles.All}>
                <div className={styles.all}>All</div>
            </div>
            <div className={styles.group2}>
                <div className={styles.frame1}>
                    <div className={styles.g}>Graphic Design</div>
                </div>
                <div className={styles.frame2}>
                    <div className={styles.a}>App Design</div>
                </div>
                <div className={styles.frame3}>
                    <div className={styles.w}>Web Design</div>
                </div>
                <div className={styles.frame4}>
                    <div className={styles.t}>UI/UX</div>
                </div>
                <div className={styles.frame5}>
                    <div className={styles.u}>UI/UX</div>
                </div>
                <div className={styles.frame6}>
                    <div className={styles.s}>UI/UX</div>
                </div>
                <div className={styles.frame7}>
                    <div className={styles.o}>UI/UX</div>
                </div>
            </div>


            <div className={styles.projectItem1}>
                <div className={styles.group1}>
                    <div className={styles.rectangle3}></div>
                    <div className={styles.rectangle4}><svg width="445" height="489" viewBox="0 0 445 489" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="445" height="489" rx="12" fill="#FFEBDB" />
                    </svg>
                    </div>
                    <div ><Image src="public/images/img5.png" alt="Profile" className={styles.design5} width={274} height={405} layout="fixed" priority={true}/></div>
                    <div ><Image src="public/images/img5.png" alt="Profile" className={styles.design6} width={274} height={489} layout="fixed" priority={true} /></div>

                </div>
                <div className={styles.web2}>Web Design </div>
                <div className={styles.air}>AirCalling Landing Page Design   </div>


            </div>
            <div className={styles.projectItem2}>
            <div className={styles.group2}>
                <div className={styles.rectangle2}><svg width="445" height="489" viewBox="0 0 445 489" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="445" height="489" rx="12" fill="#FFEBDB" />
                </svg>
                </div>
                <div ><Image src="public/images/img4.png" alt="Profile" className={styles.design3} width={274} height={420} layout="fixed" priority={true} /></div>
                <div ><Image src="public/images/img4.png" alt="Profile" className={styles.design4} width={274} height={489} layout="fixed" priority={true}/></div>
                </div>
                <div className={styles.web1}>Web Design </div>
                <div className={styles.bus}>Business Landing Page Design  </div>



            </div>
            <div className={styles.projectItem3}>
            <div className={styles.group3}>
                <div className={styles.rectangle1}><svg width="445" height="489" viewBox="0 0 445 489" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="445" height="489" rx="12" fill="#FFEBDB" />
                </svg>
                </div>
                <div ><Image src="public/images/img3.png" alt="Profile" className={styles.design1} width={274} height={412} layout="fixed" priority={true} /></div>
                <div ><Image src="public/images/img3.png" alt="Profile" className={styles.design2} width={274} height={489} layout="fixed" priority={true}/></div>
                </div>
                <div className={styles.web}>Web Design </div>
                <div className={styles.ecom}>Ecom Web Page Design </div>



            </div>

        </div>
    );
}
