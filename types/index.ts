export type NavBarProps = {
    navbar: {
        id: number
        name: string
    }[]
    onScrollToSection: (id: number) => void
}

export type MainProps = {
    main: {
        name: string
        title: string
        description: string
    }
}

export type AboutMeProps = {
    aboutMe: {
        title: string;
        description: string
    }
}

export type ProjectsProps = {
    projects: {
      title: string;
      list: {
        id: number;
        img: string;
        title: string;
        urlPage: string;
        description: string;
        github: string;
        tecnhnologies: string[];
      }[];
    };
  };