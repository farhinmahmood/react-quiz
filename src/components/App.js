import "../styles/App.css";
import Layout from "./Layout";
import Home from './pages/Home'
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home}/>
            <PublicRoute  exact path="/signup" component={Signup}/>
            <PublicRoute  exact path="/login" component={Login}/>
            <PrivateRoute exact path="/quiz" component={Quiz}/>
            <PrivateRoute exact path="/result" component={Results}/>
          </Switch>
        </Layout>
      </AuthProvider>
     
    </Router>
   

  );
}

export default App;
