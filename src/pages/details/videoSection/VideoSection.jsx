import React, { useState } from "react";

import "./VideoSection.scss";

import ContentWrapper from "../../../components/content_wrapper/ContentWrapper";
import { PlayIcon } from "../PlayBtn";
import VideoPopup from "../../../components/video_popup/VideoPopup";
import Img from "../../../components/lazy_load_img/Img";

const VideosSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);
    // console.log(data);

    const loadingSkeleton = () => {
        return (
            <div className="skItem">
                <div className="thumb skeleton"></div>
                <div className="row skeleton"></div>
                <div className="row2 skeleton"></div>
            </div>
        );
    };

    return (
        <div>
        {data?.results?.length > 0 &&<div className="videosSection">
            <ContentWrapper>
                <div className="sectionHeading">Official Videos</div>
                {!loading ? (
                    <div className="videos">
                        {data?.results?.map((item)=>{
                            return (
                                <div key={item.id} className="videoItem" 
                                onClick={ () =>{
                                    setVideoId(item.key);
                                    setShow(true);
                                }}>
                                    <div className="videoThumbnail">
                                        <Img src={`https://img.youtube.com/vi/${item.key}/mqdefault.jpg`} />
                                        <PlayIcon />
                                    </div>
                                    <div className="videoTitle">{item.name}</div>
                                </div>
                            ) 
                        })}
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </ContentWrapper>
            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>}
        </div>
    );
};

export default VideosSection;