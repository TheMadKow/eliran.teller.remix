import styles from "./avatar.module.css";

export interface AvatarProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  subtitle: string;
}

export default function Avatar({
  imageSrc,
  imageAlt,
  name,
  subtitle,
}: AvatarProps) {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <span className={styles.title}>{name}</span>
        <span className={styles.subtitle}>{subtitle}</span>
      </div>
      <img className={styles.avatar} src={imageSrc} alt={imageAlt} />
    </div>
  );
}
