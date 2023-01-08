import styles from './styles.module.css';
import Image from 'next/image';
import GitHub from '../../public/images/social/github-white.png';
import Medium from '../../public/images/social/medium-white.png';
import Twitter from '../../public/images/social/twitter-white.png';
import LinkedIn from '../../public/images/social/linkedin-white.png';
import Link from 'next/link';

export function Footer() {
  return (
    <div className={styles.container}>
      <Link className={styles.link} href='https://github.com/sampolgar'>
        <Image
          className={styles.icon}
          src={GitHub}
          alt='picture of Sam Polgar Smiling'
          width={20}
          height={20}
          layout='responsive'
          priority={true}
        />
      </Link>
      <Link className={styles.link} href='https://sampolgar.medium.com'>
        <Image
          className={styles.icon}
          src={Medium}
          alt='picture of Sam Polgar Smiling'
          width={20}
          height={20}
          layout='responsive'
          priority={true}
        />
      </Link>
      <Link className={styles.link} href='https://twitter.com/0xsamp'>
        <Image
          className={styles.icon}
          src={Twitter}
          alt='picture of Sam Polgar Smiling'
          width={20}
          height={20}
          layout='responsive'
          priority={true}
        />
      </Link>
      <Link
        className={styles.link}
        href='https://www.linkedin.com/in/sampolgar'
      >
        <Image
          className={styles.icon}
          src={LinkedIn}
          alt='picture of Sam Polgar Smiling'
          width={20}
          height={20}
          layout='responsive'
          priority={true}
        />
      </Link>
    </div>
  );
}
