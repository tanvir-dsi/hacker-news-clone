import React, {useEffect, useState} from 'react';
import useDataFetcher from '../hooks/dataFetcher.js'

const NewStoryLayout = () => {
    const  type  = 'new';

    const { isLoading, stories } = useDataFetcher(type);
    // const [story, setStory] = useState([]);
    // console.log(stories);

    // useEffect(()=> {
    //     setStory(stories)
    // } ,[stories]);

    return( <React.Fragment>
        {isLoading ? (
            <p className="loading">Loading...</p>
        ) : (
            <React.Fragment>
                {stories.map(({ data: story }, index) => (
                    <Story key={story.id} story={story} index={index} />
                ))}
            </React.Fragment>
            // <div>HEY</div>
        )}
    </React.Fragment>)
}

export const Story =({key, story, index}) =>{
    return (
        <div className="container1">
            <div className='item' key={key}>
                <div className="icon-index">{index}. </div>
                <div > <div><a href={story.url ? story.url : 'https://news.ycombinator.com/newest'}  >{story.title}</a></div>
                    <div className="item-des margin-left-10"> {story.score} points by {story.by}  </div>
                </div>
            </div>

        </div>
    )
}

export default NewStoryLayout;
