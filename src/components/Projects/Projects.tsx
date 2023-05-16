import { ProjectDataType } from './projectData'
import {icons} from '../../Assets/Logos/index';
import AnimatedPage from '../AnimatedPage';
import './projects.css'

interface Props {
    projects: ProjectDataType[];
}

const Projects: React.FC<Props> = ({ projects }: Props) => {

    return(
        <AnimatedPage>
            <section>
            {projects.map((project) => (
                <div key={project.id}>
                    <h2>{project.Title}</h2>
                    <hr/>
                    <div>{project.description}</div>

                    <ul>
                        {project.demoUrl &&
                            <li>
                                <a href={project.demoUrl}>
                                    Demo
                                </a>
                            </li>
                        }
                        {project.sourceCodeUrl &&
                            <li>
                                <a href={project.sourceCodeUrl}>
                                    Source code
                                </a>
                            </li>
                        }
                    </ul>

                    <div id="technologies">
                        {project.technologies.map((tech) => (
                            <div>
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
                </div>
            ))}
            </section>
        </AnimatedPage>
    );
};
export default Projects