import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import Services from './Pages/Home/Services/Services';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import MyOrders from './Pages/MyOrders/MyOrders';
import AllOrders from './Pages/AllOrders/AllOrders';
import AddService from './Pages/AddService/AddService';
import OrderService from './Pages/OrderService/OrderService';
import OrderSuccess from './Pages/OrderSuccess/OrderSuccess';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/service-order/:id">
              <OrderService></OrderService>
            </PrivateRoute>
            <PrivateRoute path="/order-success">
              <OrderSuccess></OrderSuccess>
            </PrivateRoute>
            <PrivateRoute path="/my-orders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/all-orders">
              <AllOrders></AllOrders>
            </PrivateRoute>
            <PrivateRoute path="/add-service">
              <AddService></AddService>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
