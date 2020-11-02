import React from 'react'
import { MyConsumer } from "../context";
import styled from "styled-components";
import { MdTune } from "react-icons/md";
export default function Search(props) {
    return (
        <MyConsumer>
            {value => {
                const { searchResults } = value;

                const searchedVideos = searchResults(props.match.params.id)
                console.log(searchedVideos)
                return (
                    <SearchWrapper>
                        <div class="searchPage__filter">
                            <MdTune className="filtericon" />
                            <h2>FILTER</h2>
                        </div>
                        <hr />
                        {searchedVideos.map(video => {
                            return (
                                
                                <div class="videoRow" key={video.id}>
                                    <img src={video.thumbnail} alt="" />
                                    <div class="videoRow__text">
                                        <h3>{video.title}</h3>
                                        <p class="videoRow__headline">{video.username} •
                                                                        
                                            <span class="videoRow__subs">
                                               
                                                                            
                                            </span> {video.views} views • {video.publish_time} seconds ago
                                                                        
                                        </p>
                                        <p class="videoRow__description">Do you want a FREE one hour training... check this out</p>
                                    </div>
                                </div>
                            );
                        })}
                    </SearchWrapper>
                )
            }}
        </MyConsumer>
    )
}

const SearchWrapper = styled.div`
margin-top : 57px;
padding: 20px;
width: 100%;
.searchPage__filter {
    display: flex;
    align-items: center;
    font-size: xx-small!important;
}
.searchPage__filter > .filtericon{
    font-size:1.5rem;
    color: var(--grey);
}
.searchPage__filter > h2{
    margin-left: 10px;
    color: var(--grey);
    font-weight: 500;
}
hr {
    height: 1px;
    border: 0;
    background-color: #d3d3d3;
    margin-top: 10px;
    margin-bottom: 10px;
}

.videoRow {
    display: flex;
    margin-bottom: 30px;
    max-width: 700px;
}
.videoRow h3 {
    font-weight : 500;
    font-size : 1.2rem;
}
.videoRow>img {
    object-fit: contain;
    width: 246px;
    height: 138px;
}
.videoRow__text {
    margin-left: 14px;
}
.videoRow__headline {
    font-size: 13px;
    color: var(--grey);
    margin-top: 3px;
}
.videoRow__description {
    margin-top: 10px;
    font-size: 13px;
    color: var(--grey);
}


`;