import React from "react";
import '../../assets/style/main.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import moment from 'moment';

const useStyles = makeStyles({
    root: {
        display:'flex',
        flexDirection:'column',
        width: 275,
        marginBottom:12,
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
    storyPublishedTime: {
        fontFamily: 'Open Sans',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 8,
        color: 'rgba(0, 0, 0, 0.5)',
    }
});

const StoryDetailsCard =({key, story, index}) =>{

    const classes = useStyles();
    return (
        <Card className={classes.root} key={key} href={story.url ? story.url : 'https://news.ycombinator.com/newest'}>
            <CardContent style={{padding:16}}>
                <div style={{display:"flex", flexDirection: "column", alignItems:"flex-start"}}>
                     <span className={classes.storyTitle}>
                    {story.title}
                </span>
                    <span className={classes.storyDetails}>
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, …when an unknown printer took a galley of type and scrambled
                </span>
                    <span className={classes.storyPublishedTime}>
                    {moment(story.time).fromNow()}
                </span>
                </div>

            </CardContent>
        </Card>
        // <div className="container1">
        //     <div className='item' key={key}>
        //         <div className="icon-index">{index}. </div>
        //         <div > <div><a href={story.url ? story.url : 'https://news.ycombinator.com/newest'}  >{story.title}</a></div>
        //             <div className="item-des margin-left-10"> {story.score} points by {story.by}  </div>
        //         </div>
        //     </div>
        //
        // </div>
    )
}
export default StoryDetailsCard;
