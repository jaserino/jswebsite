import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import ProjectElement from '../features/components/ProjectElement';

const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%']);

  const projects = [
    {
      url: './projpic/ss1.png',
      id: 1,
    },
    {
      url: './projpic/ss2.png',

      id: 2,
    },
    {
      url: './projpic/ss3.png',
      title: 'Solar Study',
      id: 3,
    },
    {
      url: './projpic/ps1.png',
      title: 'Solar Study',
      id: 4,
    },
    {
      url: './projpic/ps2.png',
      title: 'Solar Study',
      id: 5,
    },
    {
      url: './projpic/ps3.png',
      title: 'Solar Study',
      id: 6,
    },
  ];

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] bg-[radial-gradient(at_center_top,_var(--tw-gradient-stops))] from-[#212121] from-20% to-[#101010]to-80%"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
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
