import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter} from "react-router-dom";
import BasicLayout from "./component/BaseLayout";
ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <BasicLayout />
        </React.StrictMode>
    </BrowserRouter>
  ,
  document.getElementById('root')
);
