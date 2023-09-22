import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateBook from './pages/CreateBook';
import DeleteBook from './pages/DeleteBook';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="" element={<CreateBook />} />
      <Route path="" element={<DeleteBook />} />
      <Route path="" element={<EditBook />} />
      <Route path="" element={<Show />} />
    </Routes>
  );
};

export default App;
