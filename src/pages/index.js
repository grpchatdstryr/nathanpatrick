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
      <div className="container">
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            {siteConfig.title}
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--outline button--primary button--lg', styles.heroButton, styles.secondaryButton)}
              to="/resume">
              View Resume
            </Link>
            <Link
              className={clsx('button button--outline button--primary button--lg', styles.heroButton, styles.secondaryButton)}
              to="/blog">
              Read Blog
            </Link>
            <Link
              className={clsx('button button--outline button--primary button--lg', styles.heroButton, styles.secondaryButton)}
              to="/about">
              About Me
            </Link>
          </div>
        </div>
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
