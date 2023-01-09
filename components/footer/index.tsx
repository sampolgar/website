import Image from 'next/image';
import Link from 'next/link';
import GitHub from '../../public/images/social/github-white.png';
import LinkedIn from '../../public/images/social/linkedin-white.png';
import Medium from '../../public/images/social/medium-white.png';
import Twitter from '../../public/images/social/twitter-white.png';
import styles from './styles.module.css';

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.link}>
        <Link href='https://github.com/sampolgar'>
          <Image
            className={styles.icon}
            src={GitHub}
            alt='picture of Sam Polgar Smiling'
            height={50}
            width={50}
            priority={true}
          />
        </Link>
      </div>
      <div className={styles.link}>
        <Link href='https://sampolgar.medium.com'>
          <Image
            className={styles.icon}
            src={Medium}
            alt='picture of Sam Polgar Smiling'
            height={50}
            width={50}
            priority={true}
          />
        </Link>
      </div>
      <div className={styles.link}>
        <Link href='https://twitter.com/0xsamp'>
          <Image
            className={styles.icon}
            src={Twitter}
            alt='picture of Sam Polgar Smiling'
            height={50}
            width={50}
            priority={true}
          />
        </Link>
      </div>
      <div className={styles.link}>
        <Link href='https://www.linkedin.com/in/sampolgar'>
          <Image
            className={styles.icon}
            src={LinkedIn}
            alt='picture of Sam Polgar Smiling'
            height={50}
            width={50}
            priority={true}
          />
        </Link>
      </div>
    </div>
  );
}
