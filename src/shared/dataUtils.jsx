import project01 from "../assets/vanlife2.jpg";

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
            <ul className="my-2 list-disc pl-8">
              <li>
                <p>Username: user@vanlife.com</p>
              </li>
              <li>
                <p>Password: van123</p>
              </li>
            </ul>
            I also added a very basic logout scenario, that logs out a user and
            revokes access to all protected routes.
          </p>
        </li>
      </ul>
    ),
    approach:
      "This project is developed using React Router, which is built on top of the Remix framework. By utilizing React Router's nested routes, our application behaves like a Single Page Application (SPA), providing a seamless and dynamic user experience. Additionally, we leverage Remix's server concepts of loaders and actions to efficiently perform data reads and writes. Throughout the development process of this app, MirageJS was used to mimick a database holding all the relevant information such as images, profiles and user details. After finishing up the router setup I connected this app to Google Firestore.",
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
  2: {},
  3: {},
  4: {},
};

export const getProjectData = (projectId) => {
  return projectsData[projectId] || {};
};
