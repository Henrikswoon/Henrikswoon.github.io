export type ProjectDataType = {
    id: number;
    Title: string;
    description: string;
    technologies: {
      name: string;
      icon: string; // svg as string
    }[];
    image: string;
    demoUrl: string;
    sourceCodeUrl: string;
  };

  export const projectData: ProjectDataType[] = [
    {
      id: 1,
      Title: 'Min portfolie',
      description: 'To Do......',
      technologies: [
        {name: 'React', icon: 'react'},
        {name: 'TypeScript', icon: 'ts'}
      ],
      image: 'somePath',
      demoUrl: '',
      sourceCodeUrl: '',
    },
  ];