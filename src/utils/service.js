import axios from 'axios';
import {BASE_API_URL} from './constants';

//For fetching single story details
const getStoryDetailsById = async (id) => {
    try {
        const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
        return story;
    } catch (error) {
        console.log('Error while getting a story.');
    }
};
//For fetching story ids for news based on types
export const getStoriesIds = async (type) => {
    try {
        const {data: storyIds} = await axios.get(
            `${BASE_API_URL}/${type}stories.json`
        );
        return storyIds;
        console.log(storyIds)
    } catch (error) {
        console.log('Error while getting list of story Ids.');
    }
};

//get story details on Lore More button click
export const getStoryDetailsByIdList = async (storyIds) => {
    try {
        const stories = await Promise.all(storyIds.slice(0, 3).map(getStoryDetailsById));
        return stories;
    } catch (error) {
        console.log('Error while getting list of stories.');
    }
};
