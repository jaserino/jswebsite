import { AiOutlineLinkedin } from 'react-icons/ai';
import { BsFilePerson } from 'react-icons/Bs';
import { VscGithub } from 'react-icons/vsc';
import CV from '../../assets/img/JaredSerinoResume.pdf';

const SideNav = () => {
  return (
    <div className="">
      <div className="border-r-4 h-80 mb-8 drop-shadow-sidenavneon "></div>
      <div className="grid gap-4">
        <div className="">
          <a href={CV} download>
            <BsFilePerson
              className="drop-shadow-sidenavneon animate-[flicker_4s_linear_infinite] hover:animate-bounce "
              size={35}
            />
          </a>
        </div>
        <div className="">
          <a href="https://www.linkedin.com/in/jaredserino/">
            <AiOutlineLinkedin
              className="drop-shadow-sidenavneon hover:animate-bounce"
              size={35}
            />
          </a>
        </div>
        <div className="">
          <a href="https://github.com/jaserino">
            <VscGithub
              className="drop-shadow-sidenavneon hover:animate-bounce"
              size={35}
            />
          </a>
        </div>
      </div>
      <div className="border-r-4 h-80 mt-8 drop-shadow-sidenavneon"></div>
    </div>
  );
};

export default SideNav;
