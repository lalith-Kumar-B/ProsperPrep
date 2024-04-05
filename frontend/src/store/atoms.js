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
        key : "video_ids_arr_sel",
        get : async ({get})=>{
            const res = await axios.get(`http://localhost:3000/ytVideo/search?qy=${get(qyAtom)}&Lvideos=${get(LvideosAtom)}`);
            console.log(res.data.videoIds);
            return res.data.videoIds;
        }
    })


export {video_ids_arr,qyAtom,LvideosAtom}