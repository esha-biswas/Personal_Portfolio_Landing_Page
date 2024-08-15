import styles from '../styles/Contact.module.css';
import React from 'react';

export default function Contact() {
    const scrollTosection=()=>{
        const targetsection=document.getElementById("cont")
        if (targetsection) {
           targetsection.scrollIntoView();
         }
       };
    return (
        <div className={styles.contact} id='cont' onClick={scrollTosection}>
            <div className={styles.cont}>
                <div className={styles.h22}>Let’s Design Together</div>
                <div className={styles.para}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</div>
            </div>
            <div className={styles.contactForm}>

                <div className={styles.rectangle2} onClick={scrollTosection}><svg width="627" height="75" viewBox="0 0 627 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.5" width="626" height="74" rx="13.5" fill="#F8F8F8" stroke="#AFAFAF" />
                </svg>
                </div>
                <div className={styles.em}>Enter Your Email</div>
                <div className={styles.rectangle1} ><svg width="222" height="75" viewBox="0 0 222 75" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="222" height="75" rx="14" fill="#FD6F00" />
                </svg>
                </div>
                <div className={styles.btn} >Contact Me</div>
            </div>

        </div>
    );
}
