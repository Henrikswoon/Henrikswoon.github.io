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
      Title: 'henrikswoon.github.io',
      description: 'En faktisk mardröm haha, skriver rapporten sen!', // Skriven i och tolkad som html
      technologies: [
        {name: 'React', icon: 'react'},
        {name: 'TypeScript', icon: 'ts'}
      ],
      image: 'somePath',
      demoUrl: '',
      sourceCodeUrl: 'https://github.com/Henrikswoon/Henrikswoon.github.io/tree/source',
    },
  ];