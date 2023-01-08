import styles from './styles.module.css';
import Image from 'next/image';
import GitHub from '../../public/images/social/github-white.png';
import Medium from '../../public/images/social/medium-white.png';
import Twitter from '../../public/images/social/twitter-white.png';
import LinkedIn from '../../public/images/social/linkedin-white.png';

export function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <Image
          className={styles.icon}
          src={GitHub}
          alt='picture of Sam Polgar Smiling'
          width={66}
          height={66}
          layout='responsive'
          priority={true}
        />
        <Image
          className={styles.icon}
          src={Medium}
          alt='picture of Sam Polgar Smiling'
          width={66}
          height={66}
          layout='responsive'
          priority={true}
        />
        <Image
          className={styles.icon}
          src={Twitter}
          alt='picture of Sam Polgar Smiling'
          width={66}
          height={66}
          layout='responsive'
          priority={true}
        />
        <Image
          className={styles.icon}
          src={LinkedIn}
          alt='picture of Sam Polgar Smiling'
          width={66}
          height={66}
          layout='responsive'
          priority={true}
        />
      </div>
    </div>
  );
}
