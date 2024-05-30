import './App.css';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Question1 from './components/TestArea/Question1/Question1';
import Question2 from './components/TestArea/Question2/Question2';
import Question3 from './components/TestArea/Question3/Question3';
import TestLayout from './components/TestLayout/TestLayout';
import './style.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <TestLayout></TestLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: 'userId/testId/Q1', //TODO: Add user id verification
        element: <Question1 />,
      },
      {
        path: 'userId/testId/Q2', //TODO: Add user id verification
        element: <Question2 />,
      },
      {
        path: 'userId/testId/Q3',
        element: <Question3 />,
      },
    ],
  },
]);

function App() {
  return ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
