import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Users from "./layouts/users";
import Login from "./layouts/login";
import Main from "./layouts/main";
import NavBar from "./components/ui/navBar";
import ProfessionProvider from "./hooks/useProfession";
import { contextWrapper } from "./utils/contextWrapper";
import QualityProvider from "./hooks/useQuality";
const ContextWrapper = contextWrapper(ProfessionProvider, QualityProvider);

function App() {
    return (
        <div>
            <NavBar />
            <Switch>
                <ContextWrapper>
                    <Route path="/users/:userId?/:edit?" component={Users} />
                    <Route path="/login/:type?" component={Login} />
                </ContextWrapper>
                <Route path="/" exact component={Main} />
                <Redirect to="/" />
            </Switch>
            <ToastContainer />
        </div>
    );
}

export default App;