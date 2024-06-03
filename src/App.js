// Moca/moca/src/App.js
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Question1 from './components/TestArea/Question1/Question1';
import Question2 from './components/TestArea/Question2/Question2';
import PrivateRoute from './components/PrivateRoute';
import * as ROUTES from './constants/clientRoute';
import Test from './components/test';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Question2 />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.QUESTION_2} element={<Question2 />} />
      <Route path="/test" element={<Test />} />

      <Route element={<PrivateRoute />}>
        <Route path={ROUTES.QUESTION_1} element={<Question1 />} />
      </Route>
    </Routes>
  );
}
