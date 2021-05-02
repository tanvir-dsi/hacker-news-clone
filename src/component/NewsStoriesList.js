import React, {useEffect, useState} from 'react';
import Swal from "sweetalert2";
import StoryDetailsCard from "./common/StoryDetailsCard";
import {getStoriesIds, getStoryDetailsByIdList} from "../utils/service";
import '../../src/assets/style/main.css';
import {Button} from "@material-ui/core";

const NewsStoryList = (props) => {
    const [storyIds, setStoryIds] = useState([]);
    const [stories, setStories] = useState([]);
    const [pageNo, setPageNo] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const api = (props.location.pathname === '/') ? 'new' : 'top';

        getStoriesIds(api)
            .then((storyIds) => {
                setStoryIds(storyIds);
                localStorage.getItem('Ids', storyIds);
                getStoryDetailsByIdList(storyIds.splice(0, 3))
                    .then((stories) => {
                        setStories(stories);
                        setIsLoading(false);
                        localStorage.setItem('story', stories);
                    })
                    .catch((error) => {
                        console.warn('warn    ' + error);
                        Swal.fire({
                            icon: 'error',
                            title: 'Failed!',
                            text: error,
                        });
                        setIsLoading(false);
                    })
            }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Failed!',
                text: error,
            });
            console.warn('warn    ' + error);
        });
    }, []);

    const onStoryLoad = (event) => {
        event.preventDefault();
        setPageNo(pageNo + 3);
        const newstoryId = [...storyIds];
        Swal.showLoading();
        getStoryDetailsByIdList(newstoryId.splice(pageNo, 3))
            .then((newStories) => {
                setStories([...stories].concat(newStories));
                Swal.close();
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Failed!',
                    text: error,
                });
            })

    }
    return (<React.Fragment>
        {isLoading ? (
            Swal.showLoading()
        ) : (
            <React.Fragment>
                <div className='load-more-div'>
                    {stories.map(({data: story}, index) => (
                        Swal.close(),
                            <StoryDetailsCard key={story.id} story={story} index={index}/>
                    ))}
                    <Button variant="contained" className='load-more-button'
                            color={'#FFC700'} onClick={onStoryLoad}>Load More
                    </Button>
                </div>
            </React.Fragment>

        )}
    </React.Fragment>)
}

export default NewsStoryList;
