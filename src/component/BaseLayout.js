import {Route, Link ,Switch} from "react-router-dom";
import PageNotFound from './PageNotFound';
import NewStoryLayout from './NewStories';
import '../../src/assets/style/main.css';
import {Button} from "@material-ui/core";
function  BasicLayout() {

    const onStoryLoad = (event) =>{
        event.preventDefault();

    }
    return (
            <div className='background'>
                <div className='title'>Hacker News</div>
                <div className='base-layout-item-div'>
                    <div className='nav-div'>
                        <div className='fragment-layout' style={{marginRight: 7}} >
                            <Link  className='fragment-text' to="/">New</Link>
                        </div>
                        <div className='fragment-layout' >
                            <Link className='fragment-text' to="/past">Past</Link>
                        </div>
                    </div>

                </div>

            <main>
                <Switch>
                    <Route path="/" component={NewStoryLayout} exact />
                    <Route component={PageNotFound} />
                </Switch>
            </main>
                <Button className='load-more-button' onClick={onStoryLoad}>Load More</Button>
        </div>
    )
}
export default BasicLayout;
