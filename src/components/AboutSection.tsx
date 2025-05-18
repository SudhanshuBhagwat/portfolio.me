"use client";

import { motion } from "framer-motion";

interface TimelineItemProps {
  imgSrc: string;
  year: string;
  title: string;
  description?: string;
  delay: number;
}

function TimelineItem({
  imgSrc,
  year,
  title,
  description,
  delay,
}: TimelineItemProps) {
  return (
    <motion.div
      className="relative pl-8 pb-8 border-l border-gray-200 dark:border-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <img
        src={imgSrc}
        className="w-8 absolute left-[-16px] top-0 bg-gray-50 dark:bg-zinc-950 transition-all duration-300"
      />
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
        {year}
      </div>
      {description && (
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      )}
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section className="py-8">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2>About Me</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-12">
            I'm a passionate developer with over 6 years of experience in
            creating digital experiences. My journey in tech has been driven by
            a desire to build solutions that make a difference. I specialize in
            full-stack development, with a particular focus on creating
            intuitive user interfaces and scalable backend systems.
          </p>

          <h3>Experience</h3>
          <div className="mt-8 px-5">
            <TimelineItem
              imgSrc="https://brandeps.com/logo-download/W/Western-Union-logo-vector-02.svg"
              year="May 2023 - Present"
              title="Senior Software Associate at Western Union"
              delay={0.1}
            />
            <TimelineItem
              imgSrc="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAS1BMVEVHcEwDTWf///8AS2UETWcETWcETWcETWcASmUETWcAQV8AO1oARmJmiJfR3OH2+fuQp7I3aH0iW3Pg6OyousNPeIp4lqTC0NYsYXjjCq93AAAACnRSTlMA////7oSFyghvtdGXCwAAAM9JREFUKJHN0sFigzAIANAAdlHAmFZT+/9fWsDVy2rO44R5JBExwd8Y8jSmiC/ocesh5B6GXqKffI0wflCZWT0hy5RibXIkIml1q00IGCyZj7psSHeAFT0KSI1kmdlwMNR5NVvWBXF9/ib49L2B9jCLcOzaWMRKEOjEKna8bIi73QuuVU/0OtCG2DTe0Kr4RHakB+I9uuAFi5yo/wcHoFb245s/SnkF6l42byV793yMhkSOeQDHUpo6A01jD9Oth37rNV5r/Ls/PUzjlIcv+AaWGgvZF1Dn+AAAAABJRU5ErkJggg=="
              year="Apr 2021 - May 2023"
              title="Software Developer at MRI Software"
              delay={0.2}
            />
            <TimelineItem
              imgSrc="https://companieslogo.com/img/orig/TRMB-f6434f42.png?t=1720244494"
              year="Aug 2019 - Apr 2021"
              title="Software Developer at Trimble Inc."
              delay={0.3}
            />
            <TimelineItem
              imgSrc="https://companieslogo.com/img/orig/TRMB-f6434f42.png?t=1720244494"
              year="Jan 2019 - Sep 2019"
              title="Software Development Intern at Trimble Inc."
              delay={0.4}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
