import {Route, Link ,Switch} from "react-router-dom";
import PageNotFound from './PageNotFound';
import NewStoryLayout from './NewStories';
function  BasicLayout() {
    return (
        <div >

            <div>
                <div className='nav-header'>Hacker News</div>
                <div ><Link to="/" className="link">new</Link></div>
                <div > <Link to="/past" className="link"><a>past</a></Link></div>
            </div>
            <main>
                <Switch>
                    <Route path="/" component={NewStoryLayout} exact />
                    <Route component={PageNotFound} />
                </Switch>
            </main>
        </div>
    )
}
export default BasicLayout;
