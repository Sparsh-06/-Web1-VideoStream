import React from "react";
import { Box, CardContent, CardMedia, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { demoProfilePicture } from "./utils/contants";

const ChannelCard = ({ channelDetail }) => {
  return (
    <Box sx={{ boxShadow: "none", borderRadius: "20px", width:'320px'}}>
      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#FFF', alignItems:'center'}}>
          <CardMedia image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title} sx={{borderRadius:'50%', height:'180px', width:'180px', mb:2, border:'2px solid grey'}}
          >
          </CardMedia>
          <Typography variant="h7">{channelDetail?.snippet?.title}<CheckCircle sx={{fontSize:12, color:'grey', ml:'5px'}}/></Typography>
        </CardContent>
      </Link>

    </Box>
  );
};

export default ChannelCard;
