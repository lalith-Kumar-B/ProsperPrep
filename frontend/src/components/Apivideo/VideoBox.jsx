import React from 'react'
import Video from './Video.jsx'
import { video_ids_arr } from '../../store/atoms.js'
import {useRecoilValueLoadable} from 'recoil'
function VideoBox() {
    const videos = useRecoilValueLoadable(video_ids_arr);
    console.log(videos);
    if(videos.state == 'hasValue'){
        return(
            <div className='flex w-full flex-wrap justify-center items-center gap-2 border-2 rounded-md mt-5'>
                {videos.contents.map((i,j)=>< Video id={j} video_id={i}/>)}
            </div>
        )
    }else if(videos.state == 'loading'){
        return <div>Loading ...</div>
    }
}

export default VideoBox
