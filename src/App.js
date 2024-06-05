// Moca/moca/src/App.js
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login';
import Question1 from './components/TestArea/Question1/Question1';
import Question2 from './components/TestArea/Question2/Question2';
import PrivateRoute from './components/PrivateRoute';
import * as ROUTES from './constants/clientRoute';
import Test from './components/test';
import Question3 from './components/TestArea/Question3/Question3';
import Question5 from './components/TestArea/Question5/Question5';
import Question4 from './components/TestArea/Question4/Question4';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path="/test" element={<Test />} />
    {/* TODO：现在的pattern是whenever i fresh pages 重新login fix it*/}
      <Route element={<PrivateRoute />}>
        <Route path={ROUTES.QUESTION_1} element={<Question1 />} />
        <Route path={ROUTES.QUESTION_2} element={<Question2 />} />
        <Route path={ROUTES.QUESTION_3} element={<Question3 />} />
        <Route path={ROUTES.QUESTION_4} element={<Question4 />} />
        <Route path={ROUTES.QUESTION_5} element={<Question5 />} />
      </Route>
    </Routes>
  );
}
