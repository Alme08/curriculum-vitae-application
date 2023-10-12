import uniqid from "uniqid";

const exampleData = {
  personalInfo: {
    fullName: 'José Méndez',
    title: 'Web Developer',
    email: 'jose.mendez@mail.com',
    address: 'Táchira, VZLA',
    phone: '+58 123-4567890',
  },
  educations: [
    {
        university: 'Táchira City University',
        city: 'Táchira, Venezuela',
        degree: 'Bachelors in Economics',
        from: '08/2020',
        to: 'present',
        hidden: false,
        edit: false,
        id: uniqid(),
    },
    {
        university: 'Hidden University',
        city: 'Táchira, Venezuela',
        degree: "Master's Degree in Math",
        from: '08/2020',
        to: 'present',
        hidden: true,
        edit: false,
        id: uniqid(),
    },
  ],

  experiences: [
    {
        company: 'Umbrella Inc.',
        position: 'UX & UI Designer',
        from: '08/2020',
        to: 'present',
        city: 'Táchira, Venezuela',
        description:
            'Designed and prototyped user interface patterns for various clients in various industries, ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android',
        hidden: false,
        edit: false,
        id: uniqid(),
    },
    {
        company: 'Black Mesa Labs',
        position: 'UX Research Assistant',
        from: '04/2018',
        to: '02/2019',
        city: 'Caracas, Venezuela',
        description:
            'Supported senior researchers on accessibility standards for the open web. Created and usability tested wireframes and prototypes. Produced interactive documentation for quick onboarding of new researchers.',
        hidden: false,
        edit: false,
    id: uniqid(),
    },
  ],
};

export default exampleData;
