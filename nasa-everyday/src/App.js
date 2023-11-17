import { Route, Routes } from 'react-router-dom';
import Earth_Background from './image/Earth_backround.mp4';
import s from './app.module.scss';
import Header from './components/header/Header';
import Application from './components/content/application/Application';
import Contact from './components/content/contact/Contact';
import Docs from './components/content/docs/Docs';
import Home from './components/content/home/Home';

function App() {
  return (
    <div className={s.wrapper}>
      <video class={s.videoBG} autoPlay loop muted >
        <source src={Earth_Background} type="video/mp4"/>
      </video>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/application" element={<Application />}/>
        <Route path="/docs" element={<Docs />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
