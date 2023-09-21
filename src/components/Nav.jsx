const Nav = () => {
  return (
    <div className="flex justify-around p-6 font-zeb text-cyber-light ">
      <div className="mr-80 hover:drop-shadow-hoverneon">LOGO</div>

      <div className="flex gap-6 ">
        <div className="hover:drop-shadow-hoverneon">
          <a href="">ABOUT</a>
        </div>
        <div className="hover:drop-shadow-hoverneon">
          <a href="">SKILLS</a>
        </div>
        <div className="hover:drop-shadow-hoverneon">
          <a href="">PROJECTS</a>
        </div>
        <div className="hover:drop-shadow-hoverneon">
          <a href="">CONTACT</a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
