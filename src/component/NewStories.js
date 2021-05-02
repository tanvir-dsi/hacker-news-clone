import React, {useEffect, useState} from 'react';
import useDataFetcher from '../hooks/dataFetcher.js'
import StoryDetailsCard from "./common/StoryDetailsCard";
import {getStoriesIds, getStoryDetailsByIdList} from "../utils/service";
import '../../src/assets/style/main.css';
import {Button} from "@material-ui/core";

const NewStoryLayout = () => {
    const [storyIds, setStoryIds] = useState([]);
    const [stories, setStories] = useState([]);
    const [pageNo, setPageNo] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=> {
        getStoriesIds('new')
            .then((storyIds) =>{
                console.log(storyIds);
                setStoryIds(storyIds);
                localStorage.getItem('Ids',storyIds);
                getStoryDetailsByIdList(storyIds.splice(0,3))
                    .then((stories) =>{
                        setStories(stories);
                        setIsLoading(false);
                        localStorage.setItem('story', stories);
                    })
                    .catch((error)=>{
                        console.warn('warn    '+error);
                        setIsLoading(false);
                    })
            }).catch((error)=>{
            console.warn('warn    '+error);
        });
    } ,[]);

    const onStoryLoad = (event) =>{
        event.preventDefault();
        setPageNo(pageNo+3);
        const newstoryId =[...storyIds];
        getStoryDetailsByIdList(newstoryId.splice(pageNo,3))
            .then((newStories) =>{
                setStories([...stories].concat(newStories));
            })
            .catch((error)=>{
                console.warn('warn    '+error);
            })

    }
    return( <React.Fragment>
        {isLoading ? (
            <p className="loading">Loading...</p>
        ) : (
            <React.Fragment>
                {stories.map(({ data: story }, index) => (
                    <StoryDetailsCard key={story.id} story={story} index={index} />
                ))}
                <Button variant="contained" className='load-more-button'
                        color={'#FFC700'} onClick={onStoryLoad}>Load More
                </Button>
            </React.Fragment>
            // <div>HEY</div>

        )}
    </React.Fragment>)
}

// export const Story =({key, story, index}) =>{
//     return (
//         <div className="container1">
//             <div className='item' key={key}>
//                 <div className="icon-index">{index}. </div>
//                 <div > <div><a href={story.url ? story.url : 'https://news.ycombinator.com/newest'}  >{story.title}</a></div>
//                     <div className="item-des margin-left-10"> {story.score} points by {story.by}  </div>
//                 </div>
//             </div>
//
//         </div>
//     )
// }

export default NewStoryLayout;
