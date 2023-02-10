import './App.css';
import { MyRoutes } from './router/MyRoutes';
require('dotenv').config();


function App() {
  return (
   <div className='layout'>
    <MyRoutes/>
   </div>
  );
}

export default App;
