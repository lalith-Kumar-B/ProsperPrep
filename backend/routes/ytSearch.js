import express from 'express'
import 'dotenv/config'
import axios from 'axios';
const ytRouter = express.Router();
ytRouter.get('/search',async(req,res)=>{
    const {qy="financial terms",Lvideos=40} = req.query;
    console.log((req.query));
    const youtubeRes = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=${Lvideos}&q=${qy}&key=${process.env.YT_API_KEY}`)

    const filtered_data = youtubeRes.data.items.map((i,j)=>{
        if(i.id.videoId) return i.id.videoId;
    }).filter((i,j)=>i != null);
    
    res.json({videoIds : filtered_data});
})

export default ytRouter;
