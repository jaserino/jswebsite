import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

import ProjectElement from '../features/components/ProjectElement';

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['4%', '-70%']);

  const projects = [
    {
      urls: ['./projpic/ss1.png', './projpic/ss2.png', './projpic/ss3.png'],
      id: 1,
      title: 'Solar Study',
    },
    {
      urls: ['./projpic/ps1.png', './projpic/ps2.png', './projpic/ps3.png'],
      id: 2,
      title: 'Plant Social',
    },

    {
      urls: './projpic/ss2.png',
      id: 3,
      title: 'Snow Buddies',
    },
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] ">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden bg-[radial-gradient(at_center_top,_var(--tw-gradient-stops))] from-cyber-dark from-20% to-[#101010] to-80%">
        <motion.div style={{ x }} className="flex gap-96">
          {projects.map((project) => {
            return <ProjectElement project={project} key={project.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
