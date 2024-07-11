import { useEffect } from 'react';
import styles from './VideoPopup.module.css';

export default function VideoPopup({ videoUrl, onClose }) {
  useEffect(() => {
    console.log("Video URL:", videoUrl);
  }, [videoUrl]);

  const autoplayUrl = `${videoUrl}?autoplay=1`;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <div className={styles.container}>
          <iframe
            className={styles.responsiveIframe}
            loading="lazy"
            src={autoplayUrl}
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
