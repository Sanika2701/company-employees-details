import logo from './logo.svg';
import './App.css';
import Navnew from './Components/NavNew';
import Home from './Components/Home';
import MainComp from './Components/MainComp';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorNew from './Components/ErrorNew';
import About from './Components/About';
import Contact from './Components/Contact';
import Services from './Components/Services';
import Portfolio from './Components/Portfolio';
import Team  from './Components/Team';
import Add from './Components/Add';



const Route = createBrowserRouter([
  {path:'/', element:<Home></Home>},
  {path:'*' ,element:<ErrorNew></ErrorNew>},
  {path:'/about', element:<About></About>},
  {path:'/contact', element:<Contact></Contact>},
  {path:'/create', element:<Add></Add>},
  
  {path:'/service',element:<Services></Services>},
  {path:'/portfolio',element:<Portfolio></Portfolio>},
  {path:'/team',element:<Team></Team>},
  
  
])

function App() {
  return (
    <div className="App">
         <RouterProvider router={Route}></RouterProvider>
    </div>
  );
}

export default App;
