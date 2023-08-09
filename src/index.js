import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './screens/App';
import FirstPage from './screens/FirstPage';
import SecondPage from './screens/SecondPage';
import BasicToolbar from './components/BasicToolbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import myStore from './redux';



import 'bootstrap/dist/css/bootstrap.min.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <Provider store={myStore}>
    <BrowserRouter>
    
      <BasicToolbar/>

      <Routes>
        <Route index path='/' element={<App/>}/>
        <Route path='/first_page' element={<FirstPage/>}/>
        <Route path='/second_page' element={<SecondPage/>}/>   
      </Routes>

      </BrowserRouter>
    </Provider>



    
);


