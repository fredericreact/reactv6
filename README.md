# React router v6

```javascript
npm install react-router-dom@latest
```

## Switch, route and link

Before

```javascript
import {Route, Switch} from 'react-router-dom'
import Products from './pages/Products'
import Welcome from './pages/Welcome';
import MainHeader from './components/MainHeader'
import ProductDetail from './pages/ProductDetail';
 
function App() {
  return (
    <div>
    <MainHeader/>
    <main>
    <Switch>
      <Route path="/welcome">
        <Welcome/>
      </Route>
      <Route path="/products" exact>
        <Products/>
      </Route>
      <Route path='/products/:productId'>
        <ProductDetail/>
      </Route>
      </Switch>
      </main>
    </div>
  );
}
 
export default App;
 

```

After 

```javascript
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
 

```
before

```javascript
import {NavLink} from 'react-router-dom';
import classes from './MainHeader.module.css'
 
const MainHeader =() =>{
    return (
    <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <NavLink activeClassName={classes.active} to='/welcome'>Welcome</NavLink>
                </li>
                <li>
                    <NavLink activeClassName={classes.active} to='/products'>Products</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    )
}
 
export default MainHeader;

```
after
```javascript
import {NavLink} from 'react-router-dom';
import classes from './MainHeader.module.css'
 
const MainHeader =() =>{
    return (
    <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    <NavLink className={(navData)=>navData.isActive ? classes.active : ''} to='/welcome'>Welcome</NavLink>
                </li>
                <li>
                    <NavLink className={(navData)=>navData.isActive ? classes.active : ''} to='/products'>Products</NavLink>
                </li>
            </ul>
        </nav>
    </header>
    )
}
 
export default MainHeader;

```

## Redirect and nested routes

before
```javascript
import { Route, Routes, Redirect } from 'react-router-dom';
 
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';
 
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' exact>
            <Redirect to='/welcome' />
          </Route>
          <Route path="/welcome" element={<Welcome/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path='/products/:productId' element={<ProductDetail/>}/>
 
        </Routes>
      </main>
    </div>
  );
}
 
export default App;
 
// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
 

```
after
```javascript
import { Route, Routes, Navigate } from 'react-router-dom';
 
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';
 
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' element={<Navigate  to='/welcome' />} />
          <Route path="/welcome/*" element={<Welcome/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path='/products/:productId' element={<ProductDetail/>}/>
        </Routes>
      </main>
    </div>
  );
}
 
export default App;
 
// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
 

```
before
```javascript
import { Route } from 'react-router-dom';
 
const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome, new user!</p>
      </Route>
    </section>
  );
};
 
export default Welcome;
 

```
after
```javascript
import { Route, Routes } from 'react-router-dom';
 
const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Routes>
      <Route path="new-user" element={ <p>Welcome, new user!</p>}>
       
      </Route>
      </Routes>
    </section>
  );
};
 
export default Welcome;

```

## alternative way to define nested routes directly in app , within the list of routes

```javascript
import { Route, Routes, Navigate } from 'react-router-dom';
 
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';
 
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Routes>
          <Route path='/' element={<Navigate  to='/welcome' />} />
          <Route path="/welcome/*" element={<Welcome/>}>
          <Route path="new-user" element={ <p>Welcome, new user!</p>}>
       </Route>
          </Route>
      <Route path="/products" element={<Products/>}/>
      <Route path='/products/:productId' element={<ProductDetail/>}/>
        </Routes>
      </main>
    </div>
  );
}
 
export default App;
 
// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
// our-domain.com/product-detail/a-book
 

```

```javascript
import { Outlet } from 'react-router-dom';
 
const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Outlet/>
    </section>
  );
};
 
export default Welcome;
 

```

## useHistory replaced by useNavigate

## <Prompt/> from react router 5 not available currently in v6
