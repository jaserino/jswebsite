const ProjectElement = ({ project }) => {
  return (
    <div className="bg-transparent/[0.2] flex justify-center items-center shadow-2xl border-2 border-cyber-gray rounded-2xl h-[800px] w-[1500px]">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row ">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-8xl font-bold sm:text-7xl">{project.title}</h1>
          <p className="mt-6 mb-8 text-xl sm:mb-12">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
            nam saepe libero quos nisi, soluta aut temporibus non facilis rerum
            expedita iusto reprehenderit, porro voluptas nostrum atque
            reiciendis velit provident.
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-cyber-purple dark:text-gray-900"
              href=""
            >
              LIVE
            </a>
            <a
              className="px-8 py-3 text-lg font-semibold border rounded border-gray-100"
              href=""
            >
              REPO
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 sm:h-80 lg:h-96 h-72 xl:h-112 2xl:h-128">
          <img
            className="rounded-lg w-[650px] sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            src={project.urls[0]}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectElement;
