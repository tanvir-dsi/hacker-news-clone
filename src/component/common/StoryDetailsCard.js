import React from "react";
import '../../assets/style/main.css';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import clock from '../../assets/img/clock.svg'
import CardContent from '@material-ui/core/CardContent';
import moment from 'moment';

const useStyles = makeStyles({

    root: {
        display: 'flex',
        flexDirection: 'column',
        minWidth: 290,
        margin: '0px 16px 12px 16px',
        background: '#ffffff',
        boxShadow: '0 3 28 rgba(0, 0, 0, 0.08)',
        borderRadius: 12,
    },
    storyTitle: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        color: 'rgba(0, 0, 0, 0.82)',
    },
    storyDetails: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 10,
        margin: '4px 0px 12.5px 0px',
        color: 'rgba(0, 0, 0, 0.82)',
    },
    bottomItemDiv: {
        display: 'flex',
        flexDirection: 'row',
    },
    bottomItem: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 8,
        color: 'rgba(0, 0, 0, 0.5)',
    },
    clockLayout: {
        width: 10,
        height: 10,
        marginRight: 6,
    },
    lineLayout: {
        margin: '0 6px 0 6px',
        border: '0.5px solid rgba(0, 0, 0, 0.5)',
    }
});

const StoryDetailsCard = ({key, story, index}) => {

    const classes = useStyles();
    return (
        <div>
            <Card className={classes.root} key={key}
                  onClick={() => window.open((story.url) ? story.url : 'https://news.ycombinator.com/newest', "_blank")}>
                <CardContent style={{padding: 16}}>
                    <div style={{display: "flex", flexDirection: "column", alignItems: "flex-start"}}>
                     <span className={classes.storyTitle}>
                    {story.title}
                </span>
                        <span className={classes.storyDetails}>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled
                </span>
                        <div className={classes.bottomItemDiv}>
                            <img className={classes.clockLayout} src={clock}/>
                            <span className={classes.bottomItem}>

                    {moment(moment.unix(story.time)).fromNow()}
                    </span>
                            <div className={classes.lineLayout}></div>
                            <span className={classes.bottomItem}>
                    {story.kids ? story.kids.length : "0"} comments
                    </span>
                        </div>

                    </div>

                </CardContent>
            </Card></div>
    )
}
export default StoryDetailsCard;
