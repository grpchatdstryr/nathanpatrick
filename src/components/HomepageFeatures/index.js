import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Technical Expertise',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Experienced in software development, cloud infrastructure, and system design.
        Building scalable solutions with modern technologies.
      </>
    ),
  },
  {
    title: 'Projects & Portfolio',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Check out my projects and contributions. From web applications to
        infrastructure automation, exploring innovative solutions.
      </>
    ),
  },
  {
    title: 'Continuous Learning',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Passionate about learning new technologies and sharing knowledge.
        Documenting my journey through blog posts and technical articles.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4', styles.featureCol)}>
      <div className={styles.featureCard}>
        <div className={styles.iconWrapper}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className={styles.featureContent}>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
