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
import Language from "./components/TestArea/Language/Language";
import Memory from "./components/TestArea/Memory/Memory";
import Attention_main from "./components/TestArea/Attention/Attention_main";
import Attention_click from "./components/TestArea/Attention/Attention_click";
import Attention_math from "./components/TestArea/Attention/Attention_math";
import Language_fluency from "./components/TestArea/Language/Language_fluency";
import Abstraction from "./components/TestArea/Abstraction/Abstraction";
import Orientation from "./components/TestArea/Orientation /Orientation";
import Memory_test from "./components/TestArea/Memory/Memory_test";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path="/test" element={<Test />} />
        <Route path={ROUTES.MEMORY} element={<Memory/>}/>
        <Route path={ROUTES.MEMORY_TEST} element={<Memory_test/>}/>
        <Route path={ROUTES.ATTENTION_MAIN} element={<Attention_main/>}/>
        <Route path={ROUTES.ATTENTION_CLICK} element={<Attention_click/>}/>
        <Route path={ROUTES.ATTENTION_MATH} element={<Attention_math/>}/>
        <Route path={ROUTES.LANGUAGE} element={<Language/>}/>
        <Route path={ROUTES.LANGUAGE_FLUENCY} element={<Language_fluency/>}/>
        <Route path={ROUTES.LANGUAGE_FLUENCY} element={<Language_fluency/>}/>

        <Route path={ROUTES.ABSTRACTION} element={<Abstraction/>}/>
        <Route path={ROUTES.ORIENTATION} element={<Orientation/>}/>


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
