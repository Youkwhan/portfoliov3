import project01 from "../assets/vanlife2.jpg";
import project02 from "../assets/quizzical2.jpg";

const projectsData = {
  1: {
    title: "Vanlife",
    short_description: "A landing page website for van rentals",
    image: project01,
    team: "1 Developer (Youkwhan Kim)",
    role: "Coder, Researcher, Prototyper",
    live: "https://boisterous-gumption-10ba88.netlify.app/",
    stack:
      "JavaScript, CSS, React.js, react-router-v6, Firebase (FireStore), Mirage.js",
    overview:
      "Welcome to my rental website, where you can find the perfect travel van for your next road trip adventure. Whether you're looking to host your own van or discover and rent a new one, we've got you covered! This project revolves around leveraging the power of React Router 6, a powerful library for managing routing in React applications. The primary focus was on utilizing its features to set up nested routes and create a seamless Single Page Application (SPA) experience for our users.",
    features: (
      <ul>
        <li>
          <h4 className="project01-accent my-4 text-xl font-semibold underline underline-offset-2">
            Search Filter:
          </h4>
          <p className="leading-7">
            Users can filter by van type. Selecting a type (simple, rugged, or
            luxury) will return a list of vans of that type. The results of that
            search can be viewed and selected. Clicking on any listing will take
            the user to the details of that listing.
          </p>
        </li>
        <li>
          <h4 className="project01-accent my-4 text-xl font-semibold underline underline-offset-2">
            Saved previous route:
          </h4>
          <p className="leading-7">
            Clicking the "Back to rugged vans" sends the user back to the
            overview of all rugged vans, including the previously selected
            search parameters in the URL
          </p>
        </li>
        <li>
          <h4 className="project01-accent my-4 text-xl font-semibold underline underline-offset-2">
            Login:
          </h4>
          <p className="leading-7">
            I have created an user account, to test the protected routes and log
            in to the hosts dashboard. To log in, use the following login
            details:
          </p>
          <ul className="my-2 list-disc pl-8">
            <li>
              <p>Username: user@vanlife.com</p>
            </li>
            <li>
              <p>Password: van123</p>
            </li>
          </ul>
          <p className="leading-7">
            I also added a very basic logout scenario, that logs out a user and
            revokes access to all protected routes.
          </p>
        </li>
      </ul>
    ),
    approach: (
      <p className="leading-8">
        This project is developed using React Router, which is built on top of
        the Remix framework. By utilizing React Router's nested routes, our
        application behaves like a Single Page Application (SPA), providing a
        seamless and dynamic user experience. Additionally, we leverage Remix's
        server concepts of loaders and actions to efficiently perform data reads
        and writes. Throughout the development process of this app, MirageJS was
        used to mimick a database holding all the relevant information such as
        images, profiles and user details. After finishing up the router setup I
        connected this app to Google Firestore.
      </p>
    ),
    learned: (
      <ul className="my-2 list-disc pl-8">
        <li>
          <p className="leading-7">
            <span className="project01-accent">
              Route handling and parameters:
            </span>{" "}
            I learned how to configure and set up the router to enable efficient
            navigation and how to extract and utilize route parameters to pass
            data between components and pages within the application
          </p>
        </li>
        <li>
          <p className="leading-7">
            <span className="project01-accent">Nested routes and outlet:</span>{" "}
            I explored the concept of nested routes and how to enable the
            creation of hierarchical structures and organized content within the
            application
          </p>
        </li>
        <li>
          <p className="leading-7">
            <span className="project01-accent">Protected Routes:</span> to
            ensure that certain pages and components can only be accessed by
            authenticated users.
          </p>
        </li>
        <li>
          <p className="leading-7">
            <span className="project01-accent">
              Form component and action function:
            </span>{" "}
            When submitting in our form using the action function, instead of
            throwing an errorElement that will redirect us, we can return data
            using the useActionData to display helpful information to correct
            the form validation.
          </p>
        </li>
        <li>
          <p className="leading-7">
            <span className="project01-accent">Loader function:</span> provides
            a smooth loading experience for the user, as the delay gives the
            impression that the data is being retrieved in the background while
            still allowing the rest of the page to load and render.
          </p>
        </li>
        <li>
          <p className="leading-7">
            <span className="project01-accent">Defer, Await, Suspense:</span> To
            bring back the benefits of switching to the route immediately
            without causing delays due to request or promise handling in the
            loader function by passing the promise itself instead of waiting for
            the values and then routing.
          </p>
        </li>
      </ul>
    ),
    optimization: (
      <>
        <p>Some optimization techniques we used to enhance performance:</p>
        <ul className="my-2 list-disc pl-8">
          <li>
            <p className="leading-7">
              <span className="project01-accent">Parallel data fetching:</span>{" "}
              By fetching data in parallel, we minimize latency and enhance the
              overall loading speed of our app. This approach allows us to
              retrieve multiple sets of data simultaneously, improving
              efficiency.
            </p>
          </li>
          <li>
            <p className="leading-7">
              <span className="project01-accent">
                Deferred data loading for slow network/api requests.
              </span>{" "}
              This way we ensure that essential data is prioritized and a better
              user expereience where components will render even before the data
              is recieved through the loaders.
            </p>
          </li>
          <li>
            <p className="leading-7">
              <span className="project01-accent">Client-side routing:</span>{" "}
              Leveraging the capabilities of React Router, we utilize
              client-side routing to handle navigation and rendering of
              components on the client side. This approach eliminates the need
              for full-page refreshes, resulting in a smoother and more
              interactive user experience.
            </p>
          </li>
        </ul>
      </>
    ),
  },
  2: {
    title: "Quizzical",
    short_description:
      "Immerse yourself in a world of trivia where curiosity is rewarded!",
    image: project02,
    team: "1 Developer (Youkwhan Kim)",
    role: "Designer, Prototyper, Coder",
    live: "https://harmonious-begonia-821825.netlify.app/",
    stack: "HTML, CSS, JavaScript, React.js, Figma",
    overview:
      "Quizzical is the ultimate online trivia quiz designed to test your knowledge across a variety of categories. With Quizzical, players can engage in a fun and challenging experience, answering 5 random questions at a time. These trivia questions are retrieved from the Open Trivia Database API, ensuring a diverse range of content for endless entertainment.",
    features: (
      <ul>
        <li>
          <h4 className="project02-accent my-4 text-xl font-semibold underline underline-offset-2">
            Vast Question Bank:
          </h4>
          <p className="leading-7">
            Quizzical utilizes the Open Trivia Database API to access a wide
            array of trivia questions covering various categories.
          </p>
        </li>
        <li>
          <h4 className="project02-accent my-4 text-xl font-semibold underline underline-offset-2">
            Randomized Questions:
          </h4>
          <p className="leading-7">
            Each round presents players with 5 random questions, ensuring a
            unique experience every time.
          </p>
        </li>
        <li>
          <h4 className="project02-accent my-4 text-xl font-semibold underline underline-offset-2">
            Answer Validation:
          </h4>
          <p className="leading-7">
            Participants can validate their answers after completing all the
            questions, allowing them to assess their knowledge and accuracy.
          </p>
        </li>
      </ul>
    ),
    approach: (
      <ol className="list-decimal">
        <li>
          <h4 className="my-4 text-xl font-semibold">
            {" "}
            Initial Setup and Styling:
          </h4>
          <ul className="my-2 list-disc pl-8">
            <li>
              <p className="leading-7">
                Established the application structure by creating key components
                like QuizMenus.jsx, Quiz.jsx, and Trivia.jsx.
              </p>
            </li>
            <li>
              <p className="leading-7">
                Implemented custom CSS for a polished interface, exploring
                techniques like z-index manipulation and glassmorphism using
                box-shadows.
              </p>
            </li>
          </ul>
        </li>
        <li>
          <h4 className="my-4 text-xl font-semibold">
            App.js and Game Flow Management:
          </h4>
          <ul className="my-2 list-disc pl-8">
            <li>
              <p className="leading-7">
                Orchestrated game flow within App.js, dynamically rendering
                components based on the game state.
              </p>
            </li>
            <li>
              <p className="leading-7">
                Integrated QuizMenu.jsx to gather user preferences and interact
                with the trivia API.
              </p>
            </li>
            <li>
              <p className="leading-7">
                Managed formData state to streamline user selections and
                transmit preferences to the API.
              </p>
            </li>
          </ul>
        </li>

        <li>
          <h4 className="my-4 text-xl font-semibold">QuizMenu.jsx:</h4>
          <ul className="my-2 list-disc pl-8">
            <li>
              <p className="leading-7">
                Managed user interactions for trivia preferences and data
                retrieval from the API.
              </p>
            </li>
            <li>
              <p className="leading-7">
                Leveraged useEffect hook for side effects, handling data
                fetching and formData updates.
              </p>
            </li>
          </ul>
        </li>

        <li>
          <h4 className="my-4 text-xl font-semibold">Quiz.jsx:</h4>
          <ul className="my-2 list-disc pl-8">
            <li>
              <p className="leading-7">
                Rendered trivia questions fetched from the API.
              </p>
            </li>
            <li>
              <p className="leading-7">
                Implemented a streamlined state structure for all questions,
                enhancing management and consistency.
              </p>
            </li>
            <li>
              <p className="leading-7">
                Utilized the Trivia component to dynamically present questions
                and answer choices for a seamless user experience.
              </p>
            </li>
          </ul>
        </li>
      </ol>
    ),
    learned: (
      <ul className="my-2 list-disc pl-8">
        <li>
          <p className=" mb-2 leading-7">
            <span className="project02-accent">Importance of Planning:</span> I
            realized the significance of planning ahead to ensure the
            development of pure functions and components. As new features were
            added during the development process, I noticed that my code started
            becoming more complex and cluttered. To address this, I took a step
            back and went back to the drawing board. By carefully assessing the
            impact on performance and the structure of the code, I was able to
            break down the tasks and take a step-by-step approach. This allowed
            me to maintain a more organized and efficient codebase that I could
            easily follow. Although there are still areas I would like to
            refactor, such as addressing props drilling and extracting functions
            into their own files, planning ahead helped me avoid unnecessary
            complexity and improve the overall code quality.
          </p>
        </li>
        <li>
          <p className="leading-7">
            <span className="project02-accent">Understanding Hooks:</span>{" "}
            Through the development of Quizzical, I gained a deep understanding
            of React hooks, specifically useState and useEffect. These hooks
            played a crucial role in managing state and handling component
            lifecycle events. I learned how to leverage the useState hook to
            create and manage state variables within functional components,
            enabling me to easily track and update data. The useEffect hook
            proved invaluable in managing side effects, such as fetching data
            from the API and performing actions in response to component
            lifecycle events. By mastering these hooks, I was able to ensure the
            proper flow and behavior of my application.
          </p>
        </li>
      </ul>
    ),
    optimization: (
      <ul className="my-2 list-disc pl-8">
        <li>
          <p className="leading-7">
            User input to control number of questions.
          </p>
        </li>
        <li>
          <p className="leading-7">Count down timer.</p>
        </li>
        <li>
          <p className="leading-7">
            Add a leaderboard to track high scores and encourage competition.
          </p>
        </li>
        <li>
          <p className="leading-7">
            API token, so each session will GUARENTEE a unique pool of
            questions, every rerun.
          </p>
        </li>
      </ul>
    ),
  },
  3: {},
  4: {},
};

export const getProjectData = (projectId) => {
  return projectsData[projectId] || {};
};
