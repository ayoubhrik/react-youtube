import React from 'react'
import { MyConsumer } from "../context";
import styled from "styled-components";
import Filterbar from "./Filterbar";
import VideoCard from "./VideoCard";
export default function Contents() {
    return (
        <MyConsumer>
            {value => {
                const { listVideos } = value;
                return (
                    <ContentsWrapper>
                        <Filterbar />
                        <h1>Recommended</h1>
                        <RecommendedVideosWrapper>
                            {
                                listVideos.map(video => {
                                    return (
                                        <div class="videoCard" key={video.id}>
                                            <img class="videoCard_thumbnail" src={video.thumbnail} alt="" />
                                            <div class="videoCard_info">
                                                <div class="MuiAvatar-root MuiAvatar-circle videoCard_avatar">
                                                    <img alt="Sonny Sangha" src={video.avatar} class="avatar-img" />
                                                </div>
                                                <div class="videoCard_text">
                                                    <h4>{video.title}</h4>
                                                    <p>{video.username}</p>
                                                    <p>{video.views} Views • {video.publish_time} ago</p>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })
                            }

                        </RecommendedVideosWrapper>

                    </ContentsWrapper>
                )
            }}
        </MyConsumer>
    )
}

const ContentsWrapper = styled.div`

    h1{
        margin-top : calc(57px + 56px);
        font-size: 1.5rem;
        font-weight: 500;
        padding: 0 20px;
    }
`;
const RecommendedVideosWrapper = styled.div`
    padding: 0 20px;
    display: flex;
    flex-wrap: wrap;
    .videoCard{
        margin-bottom: 40px;
        width: 270px;
    }
    .videoCard_thumbnail {
        height: 140px;
        width: 250px;
    }
    .videoCard_info {
        display: flex;
        margin-top: 10px;
        padding-right: 30px;
    }
    .videoCard_avatar{
        width: 40px;
        height: 40px;
        overflow: hidden;
        flex-shrink: 0;
        border-radius: 50%;
    }
    .avatar-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        text-align: center;
    }
    .videoCard_text {
        margin-left: 15px;
    }
    .videoCard_text>h4 {
        font-size: 14px;
        font-weight : 500;
        margin-bottom: 5px;
    }
    .videoCard_text>p {
        font-size: 14px;
        color: var(--grey);
    }

`;