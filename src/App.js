import { useRoutes } from 'react-router-dom'
import routes from './router';
import './App.css';
import TopBar from './components/TopBar/TopBar';
import SideBar from './components/SideBar/SideBar';

function App() {
  let router = useRoutes(routes)


  return (
    <>
      <TopBar />
      <div className='container'>
      <SideBar />
      {router}

      </div>
    </>
  );
}

export default App;
