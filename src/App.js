import { Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerRouter from './Routers/CustomerRouter';
import AdminRouter from './Routers/AdminRouter';



function App() {
  return (
    <div>

      

          <Routes>
              <Route path='/*' element={<CustomerRouter/>} />
              <Route path='/admin/*' element={<AdminRouter/>} />
          </Routes>

    
        
    </div>
  );
}

export default App;
