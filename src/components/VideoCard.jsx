import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoThumbnailUrl,
  demoVideoTitle,
  demoVideoUrl,
  demoChannelUrl,
  demoChannelTitle,
} from "./utils/contants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    // sx={{}}
    <Card sx={{ borderRadius: "5px", width:{md:'318px', xs:'100%'}, boxShadow:'none'  }}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          alt={snippet?.title}
          sx={{ width: 350, height: 180 }}
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#1e1e1e", height: "106px"}}>
        <Link
          to={snippet?.videoId ? `/video/${snippet?.videoId}` : demoVideoUrl}
        >
          <Typography color={"white"} variant="subtitle1" fontWeight={"bold"}>
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography color={"grey"} variant="subtitle2" fontWeight={"bold"}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircle sx={{fontSize:12, color:'grey', ml:'5px'}}/>
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
