"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-8">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <div className="flex flex-col gap-6">
            <h1 className="mb-2">
              Hi, <br />
              I'm Sudhanshu Bhagwat 👋
            </h1>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-400">
            A Full Stack Developer & UI/UX Designer based in Pune, India. I
            create beautiful, functional, and user-centered digital experiences.
            With a focus on design and development, I help businesses solve
            problems and reach their goals through creative solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
