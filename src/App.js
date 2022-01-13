import './App.css'
import {BrowserRouter, Route, Switch} from "react-router-dom";
import About from "./pages/About";
import Posts from "./pages/Posts";
import * as PropTypes from "prop-types";
import CreateNewPost from "./Components/ui/CreateNewPost/CreateNewPost";
import {Container, Grid, } from "@mui/material";
import VerticalTabs from "./Components/ui/NavBar/NavBar";
import Main from "./pages/Main";


function Routes(props) {
    return null;
}

Routes.propTypes = {children: PropTypes.node};

function App() {
    return (
        <BrowserRouter>
        <Container className="App" style={ {display:"flex", flexDirection:'row'}}>
            <VerticalTabs/>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Switch>
                        <Route path="/about" component={About} />
                        <Route path="/new-post" component={CreateNewPost} />
                        <Route path="/posts" component={Posts} />
                        <Route path="/" component={Main} />



                    </Switch>
                </Grid>
            </Grid>
        </Container>
        </BrowserRouter>
    );
}

export default App;
