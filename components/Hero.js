import styles from '../styles/Hero.module.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Contact from '../components/Contact';
export default function Home() {
    <nav>
      <Link href="#cont">Contact</Link>
      </nav>

    const scrollTohire=()=>{
        const targetoption=document.getElementById("cont")
        if (targetoption) {
           targetoption.scrollIntoView();
         }
       };
    return (
        
        <section className={styles.hero} id='h'>
            <div className={styles.heroheader} >


                <div className={styles.herolay}>
                    <div className={styles.heroText}>
                        <div className={styles.p2}>Hi I am</div>
                        <div className={styles.p1}>Muhammad Umair</div>
                        <div className={styles.h1}>UI & UX </div>
                        <div className={styles.h2}>Designer</div>
                    </div>
                    <div className={styles.para}> Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</div>
                    <div className={styles.ctaButton} onClick={scrollTohire}>

                        <div className={styles.rectangle2} ><svg width="188" height="52" viewBox="0 0 188 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="188" height="52" rx="5" fill="#FD6F00" />
                        </svg>
                        </div>
                        <div className={styles.hire}>Hire Me</div>
                    </div>
                    <div className={styles.rectangle1}><svg width="374" height="83" viewBox="0 0 374 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="374" height="83" fill="#FD6F00" fill-opacity="0.6" />
                    </svg>
                    </div>
                    <div className={styles.heroImage}>

                        <div className={styles.ellipse2}>
                            <svg width="499" height="499" viewBox="0 0 499 499" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_i_1039_415)">
                                    <circle cx="249.574" cy="249.306" r="242.934" fill="white" />
                                </g>
                                <circle cx="249.574" cy="249.306" r="245.934" stroke="url(#paint0_linear_1039_415)" stroke-width="6" />
                                <defs>
                                    <filter id="filter0_i_1039_415" x="0.639648" y="0.372086" width="497.868" height="503.868" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                        <feOffset dy="6" />
                                        <feGaussianBlur stdDeviation="3" />
                                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.47 0" />
                                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1039_415" />
                                    </filter>
                                    <linearGradient id="paint0_linear_1039_415" x1="277.725" y1="-6.13955" x2="258.958" y2="394.233" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="white" stop-opacity="0" />
                                        <stop offset="1" stop-color="#FF8233" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                        <div ><Image src="./public/hero-image.png" alt="UI/UX Designer" className={styles.img} width={538} height={352.41} layout="fixed" priority={true} /></div>
                        <div className={styles.mask}>
                            <div className={styles.ellipse1}>
                                <Image src="./public/hero-image.png" alt="UI/UX Designer" className={styles.img1}  width={537} height={617.24} layout="fixed" priority={true} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={styles.herofooter}>
                <div className={styles.facebook}><div className={styles.vector1}><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32.4752 16.2376C32.4752 7.26983 25.2054 0 16.2376 0C7.26983 0 0 7.26983 0 16.2376C0 24.3422 5.93783 31.0598 13.7005 32.278V20.9313H9.57766V16.2376H13.7005V12.6603C13.7005 8.59072 16.1247 6.34282 19.8337 6.34282C21.6097 6.34282 23.4684 6.65996 23.4684 6.65996V10.6559H21.421C19.404 10.6559 18.7748 11.9077 18.7748 13.1931V16.2376H23.2782L22.5582 20.9313H18.7748V32.278C26.5374 31.0598 32.4752 24.3422 32.4752 16.2376Z" fill="white" />
                </svg>
                </div></div>
                <div className={styles.twitter}><div className={styles.vector2}><svg width="33" height="27" viewBox="0 0 33 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7247 26.4304C22.9765 26.4304 29.6796 16.2774 29.6796 7.4755C29.6796 7.19007 29.6732 6.8983 29.6605 6.61287C30.9645 5.66987 32.0898 4.50184 32.9835 3.16365C31.7691 3.70395 30.4798 4.05683 29.1595 4.21021C30.5496 3.37691 31.5905 2.06784 32.0892 0.525666C30.7814 1.30073 29.3512 1.84747 27.8598 2.14245C26.855 1.07476 25.5264 0.367822 24.0795 0.130935C22.6326 -0.105952 21.1479 0.140406 19.8551 0.83192C18.5622 1.52343 17.5332 2.62159 16.927 3.9566C16.3209 5.29161 16.1714 6.78912 16.5017 8.21761C13.8536 8.08472 11.2629 7.3968 8.89771 6.19846C6.5325 5.00011 4.44551 3.31809 2.77205 1.26143C1.92151 2.72786 1.66125 4.46313 2.04415 6.11455C2.42705 7.76598 3.42439 9.20966 4.83347 10.1522C3.77562 10.1186 2.74094 9.83377 1.81492 9.32126V9.40371C1.81397 10.9426 2.34599 12.4344 3.32053 13.6254C4.29508 14.8164 5.65201 15.6331 7.16065 15.9368C6.18072 16.2049 5.15224 16.244 4.15479 16.051C4.5805 17.3745 5.40878 18.532 6.52403 19.3621C7.63928 20.1921 8.98586 20.6533 10.3758 20.6812C8.01607 22.5349 5.10108 23.5403 2.10035 23.5355C1.56819 23.5347 1.03656 23.5021 0.508301 23.4378C3.55672 25.3936 7.10285 26.4323 10.7247 26.4304Z" fill="white" />
                </svg>
                </div></div>
                <div className={styles.instagram}><div className={styles.vector3}><svg width="5" height="5" viewBox="0 0 5 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.87203 2.56669C4.87203 3.64498 3.99672 4.51394 2.92479 4.51394C1.84651 4.51394 0.977539 3.63863 0.977539 2.56669C0.977539 1.48841 1.85285 0.619446 2.92479 0.619446C3.99672 0.619446 4.87203 1.49476 4.87203 2.56669Z" fill="white" />
                </svg>
                </div>
                    <div className={styles.vector4}><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.25414 0.896667C4.64925 0.896667 0.91333 4.63259 0.91333 9.23748C0.91333 13.8424 4.64925 17.5783 9.25414 17.5783C13.859 17.5783 17.595 13.8424 17.595 9.23748C17.595 4.63259 13.859 0.896667 9.25414 0.896667ZM9.25414 14.6479C6.26667 14.6479 3.84371 12.2249 3.84371 9.23748C3.84371 6.25001 6.26667 3.82705 9.25414 3.82705C12.2416 3.82705 14.6646 6.25001 14.6646 9.23748C14.6646 12.2249 12.2416 14.6479 9.25414 14.6479Z" fill="white" />
                    </svg>
                    </div>
                    <div className={styles.vector5}><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.2542 2.92392C20.5927 2.92392 21.1065 2.94295 22.8127 3.01906C24.3984 3.08883 25.2547 3.35523 25.8255 3.57723C26.5803 3.869 27.1258 4.2242 27.6903 4.78871C28.2612 5.35956 28.61 5.8987 28.9018 6.6535C29.1238 7.22435 29.3902 8.08698 29.46 9.66634C29.5361 11.3789 29.5551 11.8927 29.5551 16.2248C29.5551 20.5633 29.5361 21.0771 29.46 22.7833C29.3902 24.369 29.1238 25.2253 28.9018 25.7961C28.61 26.5509 28.2548 27.0964 27.6903 27.6609C27.1195 28.2318 26.5803 28.5806 25.8255 28.8724C25.2547 29.0944 24.3921 29.3608 22.8127 29.4306C21.1001 29.5067 20.5864 29.5257 16.2542 29.5257C11.9157 29.5257 11.402 29.5067 9.69575 29.4306C8.11004 29.3608 7.25376 29.0944 6.68291 28.8724C5.92811 28.5806 5.38263 28.2254 4.81812 27.6609C4.24726 27.0901 3.89841 26.5509 3.60664 25.7961C3.38464 25.2253 3.11824 24.3627 3.04847 22.7833C2.97236 21.0707 2.95333 20.557 2.95333 16.2248C2.95333 11.8863 2.97236 11.3726 3.04847 9.66634C3.11824 8.08063 3.38464 7.22435 3.60664 6.6535C3.89841 5.8987 4.25361 5.35322 4.81812 4.78871C5.38897 4.21785 5.92811 3.869 6.68291 3.57723C7.25376 3.35523 8.11639 3.08883 9.69575 3.01906C11.402 2.94295 11.9157 2.92392 16.2542 2.92392ZM16.2542 -0.00012207C11.846 -0.00012207 11.2941 0.0189064 9.56255 0.0950202C7.8373 0.171134 6.65119 0.450218 5.62366 0.849816C4.55172 1.26844 3.6447 1.82027 2.74401 2.72729C1.83699 3.62797 1.28517 4.535 0.86654 5.60059C0.466942 6.63447 0.187858 7.81423 0.111744 9.53948C0.03563 11.2774 0.0166016 11.8292 0.0166016 16.2375C0.0166016 20.6458 0.03563 21.1976 0.111744 22.9292C0.187858 24.6544 0.466942 25.8405 0.86654 26.8681C1.28517 27.94 1.83699 28.847 2.74401 29.7477C3.6447 30.6484 4.55172 31.2066 5.61731 31.6188C6.65119 32.0184 7.83096 32.2975 9.5562 32.3736C11.2878 32.4498 11.8396 32.4688 16.2479 32.4688C20.6561 32.4688 21.208 32.4498 22.9396 32.3736C24.6648 32.2975 25.8509 32.0184 26.8785 31.6188C27.944 31.2066 28.8511 30.6484 29.7517 29.7477C30.6524 28.847 31.2106 27.94 31.6229 26.8744C32.0225 25.8405 32.3016 24.6608 32.3777 22.9355C32.4538 21.2039 32.4728 20.6521 32.4728 16.2438C32.4728 11.8356 32.4538 11.2838 32.3777 9.55217C32.3016 7.82692 32.0225 6.64081 31.6229 5.61328C31.2233 4.535 30.6715 3.62797 29.7644 2.72729C28.8638 1.82661 27.9567 1.26844 26.8911 0.856159C25.8573 0.456561 24.6775 0.177477 22.9522 0.101363C21.2143 0.0189064 20.6625 -0.00012207 16.2542 -0.00012207Z" fill="white" />
                    </svg>
                    </div></div>
                <div className={styles.linkedin}><div className={styles.vector6}><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30.596 -0.00012207H2.92224C1.59659 -0.00012207 0.524658 1.04644 0.524658 2.34038V30.1283C0.524658 31.4222 1.59659 32.4751 2.92224 32.4751H30.596C31.9216 32.4751 32.9999 31.4222 32.9999 30.1346V2.34038C32.9999 1.04644 31.9216 -0.00012207 30.596 -0.00012207ZM10.1594 27.6736H5.33886V12.1718H10.1594V27.6736ZM7.74913 10.0596C6.20148 10.0596 4.95195 8.81006 4.95195 7.26875C4.95195 5.72745 6.20148 4.47791 7.74913 4.47791C9.29044 4.47791 10.54 5.72745 10.54 7.26875C10.54 8.80371 9.29044 10.0596 7.74913 10.0596ZM28.1984 27.6736H23.3842V20.1383C23.3842 18.3433 23.3525 16.0282 20.8788 16.0282C18.3734 16.0282 17.9928 17.9881 17.9928 20.0115V27.6736H13.1849V12.1718H17.8025V14.2903H17.8659C18.5066 13.0724 20.0796 11.7848 22.4201 11.7848C27.2977 11.7848 28.1984 14.9943 28.1984 19.1679V27.6736Z" fill="white" />
                </svg>
                </div></div>
            </div>


        </section>
    );
}
