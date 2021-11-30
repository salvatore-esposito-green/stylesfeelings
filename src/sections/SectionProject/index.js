import {
    Switch,
    Route,
    useLocation,
    useHistory
  } from "react-router-dom";
import css from './project.module.sass'
import MasoryConcept from '../../components/MasoryConcept';
import MasoryProject from '../../components/MasoryProject';
import SectionLockup from '../SectionLockup'
import { conceptText, conceptTextEn } from "../../assets/data";

import { 
    interior,
    decor,
    design,
    corner
 } from '../../assets/data'

export default function SectionProject({
    project
}) {
    let location = useLocation();
    let history = useHistory();

    let back = e => {
        e.stopPropagation();
        history.goBack();
      };

    return (
        <div className={css.project}>
            {location.pathname !== "/" && location.pathname !== "/en" && <div onClick={back} className={css.back}>back to projects</div>}
            <Switch>
                <Route exact path={`/`} children={<MasoryProject data={project} />} />
                <Route exact path={`/en`} children={<MasoryProject data={project} />} />
                <Route path={`/project/interior`}>
                    <MasoryProject data={interior} />
                </Route>
                <Route path={`/en/project/interior`}>
                    <MasoryProject data={interior} />
                </Route>
                <Route path="/project/concept">
                    <SectionLockup
                        white
                        h2={conceptText.h2()}
                        p={conceptText.p()}
                        style={{paddingBottom: '2.5vw', paddingTop: '2.5vw'}}
                    />
                    <MasoryConcept />
                </Route>
                <Route path="/project/decor">
                    <MasoryProject data={decor} />
                </Route>
                <Route path="/project/design">
                    <MasoryProject data={design} />
                </Route>
                <Route path="/project/corner">
                    <MasoryProject data={corner} />
                </Route>
                <Route path="/en/project/concept">
                    <SectionLockup
                        white
                        h2={conceptTextEn.h2()}
                        p={conceptTextEn.p()}
                        style={{paddingBottom: '2.5vw', paddingTop: '2.5vw'}}
                    />
                    <MasoryConcept />
                </Route>
                <Route path="/en/project/decor">
                    <MasoryProject data={decor} />
                </Route>
                <Route path="/en/project/design">
                    <MasoryProject data={design} />
                </Route>
                <Route path="/en/project/corner">
                    <MasoryProject data={corner} />
                </Route>
            </Switch>    
            {location.pathname !== "/" && location.pathname !== "/en" && <div onClick={back} className={css.back}>back to projects</div>}
        </div>
    )
}



 
{/* <Switch>
<Route path="/">
    {location.pathname !== "/" && <div onClick={back} className={css.back}>back to projects</div>}
    <MasoryProject data={project} />
</Route>
<Route path="/en">
    {location.pathname !== "/en" && <Link to={'/en'} className={css.back}>back to projects</Link>}
    <MasoryProject data={project} />
</Route>
</Switch>
<Switch>
<Route path={`${url}/:id/interior`}>
    <MasoryProject data={interior} />
</Route>
<Route path="/concept">
    <SectionLockup
        white
        h2={conceptText.h2()}
        p={conceptText.p()}
        style={{paddingBottom: '2.5vw', paddingTop: '2.5vw'}}
    />
    <MasoryConcept />
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
<Switch>
<Route path="/">
    {location.pathname !== "/" && <Link to={'/'} className={css.back}>back to projects</Link>}
    <MasoryProject data={project} />
</Route>
<Route path="/en">
    {location.pathname !== "/en" && <Link to={'/en'} className={css.back}>back to projects</Link>}
    <MasoryProject data={project} />
</Route>
</Switch> */}