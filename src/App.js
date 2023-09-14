import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './components/home/Home';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Menu } from './components/menu/Menu';
import { Episodes } from './components/episodes/Episodes';
import { Footer } from './components/footer/Footer';
import { NotFoundPage } from './components/notFoundPage/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path={'/home'} element={<Home />} />
        <Route path={'/'} element={<Navigate to={'/home'} />} />/>
        <Route path={'/episodes'} element={<Episodes />} />
        <Route path={'/about'} element={<About />} />
        <Route path={'/contact'} element={<Contact />} />
        <Route path={'*'} element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;