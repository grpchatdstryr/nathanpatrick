import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      {/* Floating orbs */}
      <div className={styles.orb + ' ' + styles.orb1} />
      <div className={styles.orb + ' ' + styles.orb2} />
      <div className={styles.orb + ' ' + styles.orb3} />
      <div className={styles.orb + ' ' + styles.orb4} />

      {/* Mesh grid overlay */}
      <div className={styles.heroGrid} />

      {/* Vignette */}
      <div className={styles.heroVignette} />

      <div className="container">
        <div className={styles.heroContent}>
          <a
            href="https://status.nathanpatrick.net"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroBadge}
          >
            <span className={styles.badgeDot} />
            Live
          </a>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--lg', styles.heroButton, styles.primaryButton)}
              to="/docs/category/experience">
              Experience
            </Link>
            <Link
              className={clsx('button button--lg', styles.heroButton, styles.secondaryButton)}
              to="/blog">
              Read Blog
            </Link>
            <Link
              className={clsx('button button--lg', styles.heroButton, styles.secondaryButton)}
              to="/about">
              About Me
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollWheel} />
        </div>
        <span>Scroll</span>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home `}
      description="Personal professional website and blog by Nathan Patrick. Sharing technical expertise, projects, and insights.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
