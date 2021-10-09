import {
    Switch,
    Route,
    Link,
    useLocation
  } from "react-router-dom";
import css from './project.module.sass'
import MasoryProject from '../../components/MasoryProject';

import { 
    interior,
    concept,
    decor,
    design,
    corner
 } from '../../assets/data'

export default function SectionProject({
    project
}) {
    let location = useLocation();
    return (
        <div className={css.project}>
            {location.pathname !== "/" && <Link to={'/'} className={css.back}>back to projects</Link>}
            <Switch>
                <Route exact path="/">
                    <MasoryProject data={project} />
                </Route>
                <Route path="/interior">
                    <MasoryProject data={interior} />
                </Route>
                <Route path="/concept">
                    <MasoryProject data={concept} />
                </Route>
                <Route path="/decor">
                    <MasoryProject data={decor} />
                </Route>
                <Route path="/design">
                    <MasoryProject data={design} />
                </Route>
                <Route path="/corner">
                    <MasoryProject data={corner} />
                </Route>
            </Switch>
            {location.pathname !== "/" && <Link to={'/'} className={css.back}>back to projects</Link>}
        </div >
    )
}
