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
import AttentionMain from "./components/TestArea/Attention/AttentionMain";
import AttentionClick from "./components/TestArea/Attention/AttentionClick";
import AttentionMath from "./components/TestArea/Attention/AttentionMath";
import LanguageFluency from "./components/TestArea/Language/LanguageFluency";
import Abstraction from "./components/TestArea/Abstraction/Abstraction";
import Orientation from "./components/TestArea/Orientation /Orientation";
import MemoryTest from "./components/TestArea/Memory/MemoryTest";
import styles from './App.module.css';
import FrontPage from "./components/TestArea/FrontPage/FrontPage";
import ChatBox from "./components/ChatBox/ChatBox";
import LayoutRoute from "./components/LayoutRoute"; // Importing CSS module

export default function App() {
    return (
        <div>
            {/*<header className={styles.header}>*/}
            {/*    <h1 className={styles.headerTitle}>MOCA Test</h1>*/}
            {/*</header>*/}
            <main className={styles.main}>
                <Routes>
                    <Route element={<LayoutRoute />}>
                        <Route path="/" element={<Login />} />
                        <Route path={ROUTES.FRONT_PAGE} element={<FrontPage />} />
                        <Route path={ROUTES.LOGIN} element={<Login />} />
                        <Route path="/t" element={<Test />} />
                        <Route path={ROUTES.MEMORY} element={<Memory />} />
                        <Route path={ROUTES.MEMORY_TEST} element={<MemoryTest />} />
                        <Route path={ROUTES.ATTENTION_MAIN} element={<AttentionMain />} />
                        <Route path={ROUTES.ATTENTION_CLICK} element={<AttentionClick />} />
                        <Route path={ROUTES.ATTENTION_MATH} element={<AttentionMath />} />
                        <Route path={ROUTES.LANGUAGE} element={<Language />} />
                        <Route path={ROUTES.LANGUAGE_FLUENCY} element={<LanguageFluency />} />
                        <Route path={ROUTES.ABSTRACTION} element={<Abstraction />} />
                        <Route path={ROUTES.ORIENTATION} element={<Orientation />} />
                        <Route path='/chat' element={<ChatBox />} />

                        <Route element={<PrivateRoute />}>
                            <Route path={ROUTES.QUESTION_1} element={<Question1 />} />
                            <Route path={ROUTES.QUESTION_2} element={<Question2 />} />
                            <Route path={ROUTES.QUESTION_3} element={<Question3 />} />
                            <Route path={ROUTES.QUESTION_4} element={<Question4 />} />
                            <Route path={ROUTES.QUESTION_5} element={<Question5 />} />
                        </Route>
                    </Route>
                </Routes>
            </main>
            {/*<footer className={styles.footer}>*/}
            {/*    MOCA Test App &copy; 2023*/}
            {/*</footer>*/}
        </div>
    );
}
