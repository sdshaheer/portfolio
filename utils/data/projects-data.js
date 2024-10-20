import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';
import chatApplication1 from '/public/image/chatApplication-1.png'
import chatApplication2 from '/public/image/chatApplication-2.png'
import chatApplication3 from '/public/image/chatApplication-3.png'
import chatApplication4 from '/public/image/chatApplication-4.png'
import chatApplication5 from '/public/image/chatApplication-5.png'
import chatApplication6 from '/public/image/chatApplication-6.png'
import chatApplication7 from '/public/image/chatApplication-7.png'
import notion1 from '/public/image/notion-1.png'
import notion2 from '/public/image/notion-2.png'



export const projectsData = [
    {
        id: 1,
        name: 'Chat Application',
        description: 'The Chat Application is designed to provide users with a seamless, intuitive, and engaging interface for real-time communication. The application is fully responsive and utilizes WebSockets to ensure messages are delivered and displayed in real-time. Users receive instant notifications for new messages keeping them engaged without constant checking.',
        tools: ['Express', 'Node JS', 'React', 'Redux', 'Websockets', 'MongoDB', 'Firebase', 'Tailwind CSS'],
        code: '',
        images: [chatApplication1, chatApplication2, chatApplication3, chatApplication4, chatApplication5, chatApplication6, chatApplication7],
        isHosted: true,
        hostedLink: 'https://sdshaheer-chat-application.vercel.app/'
    },
    {
        id: 2,
        name: 'Notion',
        description: 'This Notion-like clone is designed to allow users to manage tasks with a drag-and-drop interface, enhancing productivity. Users can create tasks and seamlessly move them between different lists, users can create any number of tasks according to their needs.',
        tools: ['Express', 'Node JS', 'React', 'Redux', 'MongoDB', 'Firebase', 'Tailwind CSS'],
        images: [notion1, notion2],
        isHosted: true,
        hostedLink: 'https://sdshaheer-notion.vercel.app/'
    },
    {
        id: 3,
        name: 'HMS Application',
        role: 'Freelancing',
        description: 'I am contributing to Hospital Management System (HMS) which is a comprehensive web application designed to streamline hospital operations by enabling doctors to onboard patients, manage their profiles, and schedule appointments seamlessly. It features interactive dashboards for doctors and administrators, providing real-time insights into patient data, appointment schedules, and performance metrics. The system also supports PDF downloads, allowing users to generate reports such as patient histories and appointment summaries for efficient record-keeping and sharing. With its focus on improving operational efficiency and patient care, the HMS offers a user-friendly and secure platform for managing hospital workflows.',
        tools: ['Express', 'Node JS', 'React', 'Redux', 'MongoDB', 'Tailwind CSS', 'cronJob', 'Material UI'],
        images: [],
        isHosted: false,
        hostedLink: ''
    },

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