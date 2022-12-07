import {Route, Routes} from 'react-router-dom'
import Products from './pages/Products'
import Welcome from './pages/Welcome';
import MainHeader from './components/MainHeader'
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <div>
    <MainHeader/>
    <main>
    <Routes>
      <Route path="/welcome" element={<Welcome/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path='/products/:productId' element={<ProductDetail/>}/>
      </Routes>
      </main>
    </div>
  );
}

export default App;
