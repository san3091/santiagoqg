import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import Base from './Base'
import NotFound from './NotFound'
import { Bio, ItItIs, ODeath, Ngn, Experiments, ODeathProgramNotes } from './Sections'
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';

const router = createHashRouter([
  {
    path: "/",
    element: <Base />,
    errorElement: <NotFound />,
    children: [
      {
        path: "o-death",
        element: <ODeath />,
      },
      {
        path: "it-it-is",
        element: <ItItIs />,
      },
      {
        path: "o-death/program-notes",
        element: <ODeathProgramNotes />,
      },
      {
        path: "bio",
        element: <Bio/>,
      },
      {
        path: "ngn",
        element: <Ngn />,
      },
      {
        path: "Experiments",
        element: <Experiments/>,
      },
    ]
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();