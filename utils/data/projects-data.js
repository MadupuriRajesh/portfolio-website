import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Chatbot using Machine Learning',
        description: "Let the design and development of an advanced conversational AI chatbot, harnessing the capabilities of NLP transformers, particularly Microsoft Dialogue GPT models. This project defines a basic chatbot class that converts speech to text and text to speech, performs simple tasks based on user input,and engages in limited conversational ",
        tools: ['Python'],
        role: 'Python Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Vehicle showcase',
        description: 'The Vehicle Showcase project offers a captivating platform for users to explore a diverse array of vehicles with comprehensive details and stunning imagery through a sleek and intuitive interface.',
        tools: ['HTML', 'CSS'],
        role: 'Frontend Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'Online Blood Bank',
        description: 'The Online Blood Bank Project interface is built using HTML, CSS, PHP, and JavaScript, enables users to register as blood donors or seekers can request blood online, with the admin managing data.',
        tools: ['HTML', 'PHP', 'CSS'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Laravel app',
        description: "Developed a Laravel-based user management system with authentication using Laravel Breeze, and implemented features for user creation, editing, and deletion with role-based access controls. Designed reusable UI components for displaying user profiles and created automated tests to ensure functionality and reliability. Integrated GitHub for version control and collaboration through pull requests and code reviews.",
        tools: ['Laravel', 'PHP', 'Blade', 'Lucide React'],
        code: '',
        demo: '',
        image: ayla,
        role: 'Laravel Php Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },