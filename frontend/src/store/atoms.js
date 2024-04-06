import {atom, selector} from 'recoil';
import axios from 'axios'
const qyAtom = atom({
    key : "qyAtom",
    default : "Financial terms"
})

const LvideosAtom = atom({
    key : "LvideosAtom",
    default : 40
})

const video_ids_arr = selector({
        key : "video_ids_areer_sel",
        get : async ({get})=>{
            const res = await axios.get(`http://localhost:3000/ytVideo/search?qy=${get(qyAtom)}&Lvideos=${get(LvideosAtom)}`);
            console.log(res.data.videoIds);
            return res.data.videoIds;
        }
    })

const globalScoreAtom = atom({
    key:"globalScoreAtom",
    default : 0
})

const topics_arr = selector({
    key : "topics/sel",
    get : async ({get})=>{
        const res = await axios.get(`http://localhost:4000/genTopics`);
        const response = res.data.topics;
        return response;
    }
})

const quizzs_arr = selector({
    key : "video_quur_arr_sel",
    get : async ({get})=>{
        const gen = Math.random()*6;
        const topics =  ["Investment Fundamentals",
        "Personal Finance",
        "Financial Markets",
        "Economic Indicators",
        "Financial Planning",
        "Financial Analysis",
        "Financial Instruments"]
        const res = await axios.get(`http://localhost:4000/genMCQs?topic=RandomFinanceTopics&difficulty=hard&num_questions=12`);
        console.log(res.data.questions);
        return res.data.questions;
    }
})
export {video_ids_arr,qyAtom,LvideosAtom, globalScoreAtom,quizzs_arr,topics_arr}