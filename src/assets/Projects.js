import bookdev from '../images/bookdev.png';
import budgetApp from '../images/budget_app.png';
import recipeApp from '../images/recipe_app.png';
import spaceTravelers from '../images/space_travelers.png';
import tvShows from '../images/tv_shows.png';
import leaderboard from '../images/leaderboard.png';

const projects = [
  {
    id: 1,
    name: 'Book Dev',
    description:
      'This is a web page that let you make an appointment with a developer. This app uses API calls to its back-end to get the data regarding users, developers, and skills.',
    image: bookdev,
    github_link: 'https://github.com/awaisanwar544/final-capstone-ui',
    live_demo: null,
    skills: [
      {
        id: 1,
        name: 'Rails',
      },
      {
        id: 2,
        name: 'React',
      },
      {
        id: 3,
        name: 'Tailwind',
      },
    ],
  },
  {
    id: 2,
    name: 'Budget App',
    description:
      'This is a Budget web mobile app where you can register, login, create categories, add transactions and see the total amount for each category.',
    image: budgetApp,
    github_link: 'https://github.com/ryxtor/budget-app',
    live_demo: null,
    skills: [
      {
        id: 1,
        name: 'Rails',
      },
      {
        id: 2,
        name: 'PostgreSQL',
      },
      {
        id: 3,
        name: 'Bootstrap',
      },
    ],
  },
  {
    id: 3,
    name: 'Recipe App',
    description:
      'This is an app to store your recipes and make them public! After login, you can create new recipes with the food you added to your favorite foods. You can also store the ingredients you currently have in an inventory and compare the recipe you want to follow with your inventory to get a custom shopping list with the items you need!',
    image: recipeApp,
    github_link: 'https://github.com/ryxtor/recipe-app',
    live_demo: null,
    skills: [
      {
        id: 1,
        name: 'Rails',
      },
      {
        id: 2,
        name: 'PostgreSQL',
      },
      {
        id: 3,
        name: 'Bootstrap',
      },
    ],
  },
  {
    id: 4,
    name: 'Space Travelers Hub',
    description:
      '"Space Travelers Hub" is a website that work with real live data from the SpaceX API. The users can book rockets and join selected space missions.',
    image: spaceTravelers,
    github_link: 'https://github.com/yersel500/space-travelers-hub',
    live_demo: 'https://loquacious-axolotl-f182b5.netlify.app/',
    skills: [
      {
        id: 1,
        name: 'React',
      },
      {
        id: 2,
        name: 'Redux',
      },
      {
        id: 3,
        name: 'JavaScript',
      },
    ],
  },
  {
    id: 5,
    name: 'TV Shows',
    description:
      'In this project we made a Tv shows webpage where you can like or comment the different shows.',
    image: tvShows,
    github_link:
      'https://github.com/ryxtor/JS-group-capstone-project-Lucas-Omar',
    live_demo:
      'https://ryxtor.github.io/JS-group-capstone-project-Lucas-Omar/dist/',
    skills: [
      {
        id: 1,
        name: 'JavaScript',
      },
      {
        id: 2,
        name: 'HTML',
      },
      {
        id: 3,
        name: 'CSS',
      },
    ],
  },
  {
    id: 6,
    name: 'Leaderboard',
    description:
      'This is a tool for fun purposes, you can add a new score to the leaderboard using API for storage. The design is based on the Elden Ring video game.',
    image: leaderboard,
    github_link: 'https://github.com/ryxtor/Leaderboard',
    live_demo: 'https://ryxtor.github.io/Leaderboard/dist/',
    skills: [
      {
        id: 1,
        name: 'JavaScript',
      },
      {
        id: 2,
        name: 'HTML',
      },
      {
        id: 3,
        name: 'CSS',
      },
    ],
  },
];

export default projects;

// name
// description
// image
// github_link
// live_demo
// skills []
