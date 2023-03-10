import { Route } from "react-router-dom";

// Icons
import { AiFillHome } from "react-icons/ai";

// Layouts
import MainLayout from "../Layouts/MainLayout/MainLayout";

// Main Views
// import HomeView from "../Views/Main/HomeView";
// import SolutionView from "../Views/Main/SolutionView";
// import ClientSolutionView from "../Views/Main/ClientSolutionView";
// import StrategyView from "../Views/Main/StrategyView";
// import ContactView from "../Views/Main/ContactView";
import OurTeamView from "../Views/Main/OurTeamView/OurTeamView.jsx";
import PressReleaseView from "../Views/Main/PressReleaseView/PressReleaseView.jsx";
import PressPostView from "../Views/Main/PressPostView/PressPostView.jsx";

const routes = {
  main: {
    path: "/",
    element: <MainLayout />,
    title: "Main",
    routes: {
      home: {
        path: "",
        element: undefined,
        title: "Home",
        icon: <AiFillHome />,
      },
      solution: {
        path: "solution",
        element: undefined,
        title: "Solution",
        icon: <AiFillHome />,
      },
      //   clientSolution: {
      //     path: "client-solution",
      //     element: <ClientSolutionView />,
      //     title: "Client solution",
      //     icon: <AiFillHome />,
      //   },
      strategy: {
        path: "strategy",
        element: undefined,
        title: "Strategy",
        icon: <AiFillHome />,
      },
      contact: {
        path: "contact",
        element: undefined,
        title: "Contact",
        icon: <AiFillHome />,
      },
      ourteam: {
        path: "our-team",
        element: <OurTeamView />,
        title: "Our Team",
        icon: <AiFillHome />,
      },
      pressrelease: {
        path: "press-release",
        element: <PressReleaseView />,
        title: "Press Release",
        icon: <AiFillHome />,
      },
      presspost: {
        path: "press-post",
        element: <PressPostView />,
        title: "Post",
        icon: <AiFillHome />
      }
    },
  },
};

function generatePaths(routes, parentPath = "") {
  const paths = {};
  Object.entries(routes).forEach(([routeName, route]) => {
    if (route.routes) {
      paths[routeName] = generatePaths(route.routes, parentPath + route.path);
    } else {
      paths[routeName] = parentPath + route.path;
    }
  });
  return paths;
}

function generateNavBarPaths(routes) {
  const genRoutes = [];
  Object.entries(routes).forEach(([layoutName, layout]) => {
    Object.entries(layout.routes).forEach(([routeName, route]) => {
      if (!route.hideInNavbar) {
        genRoutes.push({
          name: route.title,
          path: route.path,
        });
      }
    });
  });
  return genRoutes;
}

function generateRouteComponents(routes, parentPath = "") {
  if (parentPath === "") {
    // Is a layout
    return Object.keys(routes).map((routeName, index) => {
      return (
        <Route key={index} element={routes[routeName].element}>
          {generateRouteComponents(
            routes[routeName].routes,
            routes[routeName].path
          )}
        </Route>
      );
    });
  } else {
    // Is a view
    const views = [];

    Object.keys(routes).forEach((routeName, index) => {
      views.push(
        <Route
          key={index}
          path={parentPath + routes[routeName].path}
          element={routes[routeName].element}
        />
      );

      if (routes[routeName].routes) {
        views.push(
          generateRouteComponents(
            routes[routeName].routes,
            parentPath + routes[routeName].path
          )
        );
      }
    });
    return views;
  }
}

function generateSitemap(routes, parentPath = "") {
  return (
    <ol style={{ marginLeft: "2em" }}>
      {Object.keys(routes).map((routeName, index) => {
        return (
          <li key={index}>
            {parentPath === "" ? (
              routes[routeName].title
            ) : (
              <a href={parentPath + routes[routeName].path}>
                {routes[routeName].title} ({parentPath + routes[routeName].path}
                )
              </a>
            )}

            {routes[routeName].routes &&
              generateSitemap(
                routes[routeName].routes,
                parentPath + routes[routeName].path
              )}
          </li>
        );
      })}
    </ol>
  );
}

const paths = generatePaths(routes);
const routeComponents = generateRouteComponents(routes);
const sitemap = generateSitemap(routes);
const navbarPaths = generateNavBarPaths(routes);

export { routes, paths, routeComponents, sitemap, navbarPaths };
