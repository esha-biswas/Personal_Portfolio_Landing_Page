import styles from '../styles/Testimonials.module.css';
import Image from 'next/image';

export default function Testimonials() {
    return (
        <div className={styles.testimonials} id='t'>
            <div className={styles.group5}>
                <div className={styles.hh}>Testimonials</div>
                <div className={styles.hhh}>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</div>
            </div>

            <div className={styles.group2}>
                <div className={styles.rectangle5}><svg width="330" height="344" viewBox="0 0 330 344" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="-757" width="1087" height="344" rx="14" fill="#F8F8F8" />
                </svg>
                </div>
                <div className={styles.ellipse1}></div>
                <div className={styles.testimonial1}>


                    <div className={styles.pa}>“</div>

                    <div className={styles.lo}>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</div>
                    <div className={styles.po}>“</div>
                    <div className={styles.na}>Name</div>
                    <div className={styles.b}>CEO</div>
                </div>


            </div>
            <div className={styles.group4}>
                <div className={styles.rectangle6}><svg width="1087" height="344" viewBox="0 0 1087 344" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1087" height="344" rx="14" fill="#F8F8F8" />
                </svg>
                </div>
                <div  >
                    <Image src="public/images/img1.jpg" alt="Client 1" className={styles.ellipse3} width={235} height={235} layout="fixed" priority={true}/>
                </div>
                <div className={styles.testimonial3}>
                
                    <div className={styles.pm}>“</div>

                    <div className={styles.mo}>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</div>
                    <div className={styles.ka}>“</div>
                    <div className={styles.om}>Name</div>
                    <div className={styles.jn}>CEO</div>
                </div>


            </div>
            <div className={styles.group3}>
                <div className={styles.rectangle7}><svg width="379" height="344" viewBox="0 0 379 344" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="1087" height="344" rx="14" fill="#F8F8F8" />
                </svg>
                </div>
                <div >
                    <Image src="public/images/img2.jpg" alt="Client 1" className={styles.ellipse2} width={235} height={235} layout="fixed" priority={true}/>
                    
                    
                    </div>

                <div className={styles.testimonial2}>


                    <div className={styles.s}>“</div>

                    <div className={styles.la}>Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.</div>
                    <div className={styles.e}>“</div>
                    <div className={styles.me}>Name</div>
                    <div className={styles.c}>CEO</div>
                </div>




            </div>








            <div className={styles.group1}>
                <div className={styles.rectangle1}><svg width="57" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="57" height="16" rx="8" fill="#D9D9D9" />
                </svg>
                </div>
                <div className={styles.rectangle2}><svg width="57" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="57" height="16" rx="8" fill="#D9D9D9" />
                </svg>
                </div>
                <div className={styles.rectangle3}><svg width="57" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="57" height="16" rx="8" fill="#FD6F00" />
                </svg>
                </div>
                <div className={styles.rectangle4}><svg width="57" height="16" viewBox="0 0 57 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="57" height="16" rx="8" fill="#D9D9D9" />
                </svg>
                </div>
            </div>

        </div >
    );
}
