const ProjectElement = ({ project }) => {
  return (
    <div className=" bg-neutral-800 bg-transparent/[0.2] h-[850px] w-[850px] flex justify-center items-center rounded-lg">
      <div
        key={project.id}
        className="group relative h-[350px] w-[350px] overflow-hidden rounded-lg hover:w-[850px] hover:h-[850px] object-cover"
      >
        <div
          style={{
            backgroundImage: `url(${project.url})`,
          }}
          className="absolute inset-0 z-0 filter grayscale hover:grayscale-0 blur-sm hover:blur-none"
        ></div>
      </div>
    </div>
  );
};

export default ProjectElement;
