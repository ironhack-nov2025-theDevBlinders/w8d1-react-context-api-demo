import { useContext } from "react";
import { ThemeContext } from "../context/theme.context";

function ProjectCard(props) {

  const { theme } = useContext(ThemeContext)

    return (
      <div className={"ProjectCard " + theme}>
        <h3>{props.project.name}</h3>
        <p>{props.project.technologies}</p>
      </div>
    );
  }
  
  export default ProjectCard;
  