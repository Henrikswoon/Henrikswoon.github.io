import { ProjectDataType } from './projectData'
import {icons} from '../../Assets/Logos/index';
import './projects.css'

interface Props {
    projects: ProjectDataType[];
}

const Projects: React.FC<Props> = ({ projects }: Props) => {

    return(
        <div>
            {projects.map((project) => (
                <div key={project.id}>
                    <h2>{project.Title}</h2>
                    <hr/>
                    <div>{project.description}</div>
                    <div>
                        {project.technologies.map((tech) => (
                            
                            <div>
                                <h3>{tech.name}</h3>
                                <img
                                    id="logo"
                                    key={tech.name}
                                    src={icons[tech.icon]}
                                    alt={tech.name}
                                    title={tech.name}
                                />
                            </div>
                        ))}
                    </div>
                    {project.demoUrl &&
                    <a href={project.demoUrl}>
                    {`Klicka här för att besöka demot för ${project.Title}`}
                    </a>
                    }
                    {project.sourceCodeUrl &&
                    <a href={project.sourceCodeUrl}>
                    {`Klicka här för att undersöka källkoden för ${project.Title}`}
                    </a>
                    }
                </div>
            ))}
        </div>
    );
};
export default Projects