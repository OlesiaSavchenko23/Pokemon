import type { PageSectionProps } from './types'
import styles from './PageSection.module.css';

export function PageSection({ title, children }: PageSectionProps) {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}