import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Dashboard from './Dashboard';
import Date from './Date';
import Product from './Product';
import SensorList from './SensorList';
import ToDoItem from './ToDoItem';
import ShowHide from './ShowHide';
import LifecycleDemo from './LifecycleDemo';
import DeviceStatusAPP from './DeviceStatusAPP';
import reportWebVitals from './reportWebVitals';

const data = [
  { "temperature": "25°C" },
  { "temperature": "22°C" },
  { "temperature": "36°C" },
  { "temperature": "34°C" }
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <div id="form">
  //   <label for="name">姓名：</label>
  //   <input type="text" id="name"></input>
  //   <button>送出</button>
  // </div>
  // <ShowHide />
  <React.StrictMode>
    <DeviceStatusAPP />
    {/* <LifecycleDemo/> */}
    {/* <SensorList /> */}

    {/* <ToDoItem /> */}
    {/* <Dashboard data={data} /> */}
    {/* <Product name="蘋果" price="5" onBuy={() => {
      console.log("產品已購買");
    }} /> */}
  </React.StrictMode>
  // <React.StrictMode>
  //   <Date />
  // </React.StrictMode>
  // <React.StrictMode>
  //   <Dashboard />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
