export type NavBarProps = {
    navbar: {
        id: number
        name: string
        section: string
    }[]
    scrollToSection: (section: string) => void
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
        title_2: string
        description_2: string
    }
}

export type ProjectsProps = {
    projects: {
        title: string;
        list: {
            img: string;
            title: string;
            urlPage: string;
            description: string;
            github: string;
            tecnhnologies: string[];
            topStart?: boolean
        }[];
    };
};