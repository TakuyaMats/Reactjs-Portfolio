import { v4 as uuidv4 } from 'uuid';
import WorkoutTrackerImg from '../images/Fitness-Tracker.png';
import TechBlogImg from '../images/Tech-Blog.png';
import EmployeeTrackerImg from '../images/employeeTracker.png';
import PokemonDeckBuilderImg from '../images/pokemon-deck-builder.png';
import NoteTakerImg from '../images/note-taker.png';


const projects = [{
        id: uuidv4(),
        name: <a href="https://github.com/TakuyaMats/Workout-Tracker" onClick='window.open("https://github.com/TakuyaMats/Workout-Tracker");return false;' target="_blank" rel="noreferrer">Workout Tracker</a>,
        desc: 'An application to view, create and track your daily workouts.',
        img: WorkoutTrackerImg,
    },
    {
        id: uuidv4(),
        name: <a href="https://github.com/TakuyaMats/MVC-Tech-Blog" onClick='window.open("https://github.com/TakuyaMats/MVC-Tech-Blog");return false;' target="_blank" rel="noreferrer">Tech Blog</a>,
        desc: 'An CMS-style blog application to publish articles, blog posts, and thoughts and opinions.',
        img: TechBlogImg,
    },
    {
        id: uuidv4(),
        name: <a href="https://github.com/TakuyaMats/Employee-Tracker" onClick='window.open("https://github.com/TakuyaMats/Employee-Tracker");return false;' target="_blank" rel="noreferrer">Employee Tracker</a>,
        desc: 'Using this app you can view and manage departments, roles, and employees in your company.',
        img: EmployeeTrackerImg,
    },
    {
        id: uuidv4(),
        name: <a href="https://github.com/thebadams/Pokemon-TCG-App" onClick='window.open("https://github.com/thebadams/Pokemon-TCG-App");return false;' target="_blank" rel="noreferrer">Pokemon Deck Builder</a>,
        desc: 'A application to look up and trade pokemon cards with your friends.',
        img: PokemonDeckBuilderImg,
    },
    {
        id: uuidv4(),
        name: <a href="https://github.com/TakuyaMats/Note-Taker" onClick='window.open("https://github.com/TakuyaMats/Note-Taker");return false;' target="_blank" rel="noreferrer">Note Taker</a>,
        desc: 'A note-taking application to write and save text in a list.',
        img: NoteTakerImg,
    },
];

export default projects;