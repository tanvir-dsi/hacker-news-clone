import {Route, Link, Switch} from "react-router-dom";
import headerText from '../assets/img/header-text.svg'
import footerText from '../assets/img/footer-text.svg'
import NewsStoryList from './NewsStoriesList';
import '../../src/assets/style/main.css';
import {useState} from "react";

function BasicLayout(props) {
    const isToogleTrue = (window.location.pathname === '/') ? true : false;
    const [isToggleNew, setToggleNew] = useState(isToogleTrue);
    const setToggleBar = () => {
        setToggleNew(!isToggleNew);
    }

    const onStoryLoad = (event) => {
        event.preventDefault();
    }
    return (
        <div className='background'>
            <div className='header-div'>
                <img className='header-text' src={headerText}/>
            </div>
            <div className='base-layout-item-div'>
                <div className='nav-div'>
                    <div className={isToggleNew ? 'fragment-layout-active' : "fragment-layout-inactive"}
                         style={{marginRight: 7}} onClick={setToggleBar}>
                        <Link className='fragment-text' to="/">New</Link>
                    </div>
                    <div className={isToggleNew ? "fragment-layout-inactive" : 'fragment-layout-active'}
                         onClick={setToggleBar}>
                        <Link className='fragment-text' to="/top">Top</Link>
                    </div>
                </div>
            </div>

            <main>
                <Switch>
                    <Route path='/' component={(props) => <NewsStoryList {...props} key={window.location.pathname}/>}
                           exact/>
                    <Route path="/top" component={NewsStoryList}/>
                </Switch>
            </main>
            <div className='footer-div'>
                <img className='footer-text' src={footerText}/>
            </div>
        </div>
    )
}

export default BasicLayout;
