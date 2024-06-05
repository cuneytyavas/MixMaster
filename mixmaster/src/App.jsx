import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
  HomeLayout,
  Cocktail,
  Error,
  Landing,
  Newsletter,
  About,
  SinglePageError
} from "./pages";

import {loader as landingLoader} from './pages/Landing'
import {loader as singleCocktailLoader} from './pages/Cocktail'
import {action as newsletterAction} from './pages/Newsletter';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        loader: landingLoader,
        errorElement: <SinglePageError/>,
      },
      {
        path: "cocktail/:id",
        element: <Cocktail />,
        loader: singleCocktailLoader,
        errorElement: <SinglePageError/>,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
        errorElement: <SinglePageError/>,
        action: newsletterAction,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <SinglePageError/>,
      },

    ],
  },
]);

const App = () => {
  
  return <RouterProvider router={router} />;
};
export default App;
