import Layout from './components/Layout';
import Home from './pages/Home';
import TreehouseDetail from "./pages/TreehouseDetail";
import { HashRouter, Routes, Route } from 'react-router-dom';



function App() {
  
  return (
  <HashRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/treehouses/:slug" element={<TreehouseDetail />} />
      </Route>
    </Routes>
  </HashRouter>  
  
  );
};

export default App
