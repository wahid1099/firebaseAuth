
import Login from "./LogIn/Login";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AuthProvider, {AuthContext} from "./Context/AuthProvider";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
         <AuthProvider>
             <Switch>
                 <Route exac path="/">
                     <Login></Login>
                 </Route>

             </Switch>
         </AuthProvider>
     </BrowserRouter>
    </div>
  );
}

export default App;
