import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Game from './views/Game';
import Scoreboard from './views/Scoreboard';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="score" element={<Scoreboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
