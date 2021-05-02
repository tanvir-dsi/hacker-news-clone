// import axios from 'axios';
// import { BASE_API_URL } from './constants';
//
// const getStoryDetailsById = async (id) => {
//     try {
//         const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
//         return story;
//     } catch (error) {
//         console.log('Error while getting a story.');
//     }
// };
//
// export const getStoriesIds = async (type) => {
//     try {
//         const { data: storyIds } = await axios.get(
//             `${BASE_API_URL}/${type}stories.json`
//         );
//         console.log(storyIds)
//         const stories = await Promise.all(storyIds.slice(0, 3).map(getStoryDetailsById));
//         return stories;
//     } catch (error) {
//         console.log('Error while getting list of stories.');
//     }
// };
//
// export const getStoryByIdList = async (storyIds) => {
//     try {
//         const stories = await Promise.all(storyIds.slice(0, 3).map(getStoryDetailsById));
//         return stories;
//     } catch (error) {
//         console.log('Error while getting list of stories.');
//     }
// };
//
// export const getStoryDetailsByIdList = async (storyIds) => {
//     try {
//         const stories = await Promise.all(storyIds.slice(0, 3).map(getStoryDetailsById));
//         return stories;
//     } catch (error) {
//         console.log('Error while getting list of stories.');
//     }
// };

// export const getStoryDetailsByIdList = async (storyIds) => {
//     try {
//         const stories = await Promise.all(storyIds.slice(0, 3).map(getStoryDetailsById));
//         return stories;
//     } catch (error) {
//         console.log('Error while getting list of stories.');
//     }
// };

import axios from 'axios';
import { BASE_API_URL } from './constants';
// const newStoryIds
const getStoryDetailsById = async (id) => {
    try {
        const story = await axios.get(`${BASE_API_URL}/item/${id}.json`);
        return story;
    } catch (error) {
        console.log('Error while getting a story.');
    }
};

export const getStoriesIds = async (type) => {
    try {
        const { data: storyIds } = await axios.get(
            `${BASE_API_URL}/${type}stories.json`
        );
        // console.log(storyIds)
        // const stories = await Promise.all(storyIds.slice(0, 3).map(getStoryDetailsById));
        return storyIds;
        console.log(storyIds)
    } catch (error) {
        console.log('Error while getting list of story Ids.');
    }
};

export const getStoryDetailsByIdList = async (storyIds) => {
    try {
        const stories = await Promise.all(storyIds.slice(0, 3).map(getStoryDetailsById));
        return stories;
    } catch (error) {
        console.log('Error while getting list of stories.');
    }
};
