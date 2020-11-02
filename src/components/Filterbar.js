import React, { Component } from "react";
import { MyConsumer } from "../context";
import styled from "styled-components";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
export default class Filterbar extends Component {

    render() {

        return (
            <MyConsumer>
                {value => {
                    const { filterOptions, sidebarOpen } = value;
                    const offsetWidthValue = this.refs.offsetWidth
                    return (
                        <FilterbarWrapper show={sidebarOpen}>
                            <div id="carousel-left-arrow">
                                <MdNavigateBefore className="carousel-icon" 
                                    onClick={() => {
                                        this.refs.scrollLeft -= offsetWidthValue / 2;
                                    }}
                                />
                            </div>
                            <div id="carousel-scroll-container"  >
                                <div id="slider-container" ref={e => this.refs = e}>
                                    <div>
                                        {filterOptions.map(option => {

                                            return (
                                                <div key={option.id} className="optionWrapper">
                                                    {option.text}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                            </div>

                            <div id="carousel-right-arrow">
                                <MdNavigateNext className="carousel-icon"
                                    onClick={() => {
                                        this.refs.scrollLeft += offsetWidthValue / 2;
                                    }}
                                />
                            </div>
                        </FilterbarWrapper>
                    )
                }}
            </MyConsumer>
        );
    }
}

const FilterbarWrapper = styled.div`
    position: fixed;
    top: 56px;
    width:100%;
    background-color : #fff;
    height : 56px;
    z-index : 50;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-basis:auto;
flex-grow:0;
flex-shrink:0;
    #carousel-left-arrow,#carousel-right-arrow{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .carousel-icon{
        font-size: 24px;
    color: var(--grey);
    cursor: pointer;
    }
    #carousel-scroll-container{
        height: 32px;
        white-space: nowrap;
        overflow: hidden;
        width:${props => (props.show ? "calc(100% - 240px - 50px)" : "calc(100% - 70px - 50px)")} !important;
    }
    .optionWrapper{
        font-size: 14px;
        display: inline-flex;
        align-items: center;
        height: 32px;
        border-radius: 16px;
    box-sizing: border-box;
    outline: none;
    overflow: hidden;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.1);
    color: #030303;
    padding: 0 12px;
    margin-right : 12px;
    transition: background-color 0.5s cubic-bezier(0.05, 0.0, 0.0, 1);
    }
    #slider-container{
        overflow-x: hidden;
        width: 100%;
        scroll-behavior: smooth;
    }

    @media screen and (max-width: 600px) {
        #carousel-scroll-container{
        height: 32px;
        white-space: nowrap;
        overflow: hidden;
        /*width:${props => (props.show ? "calc(100% - 240px - 50px)" : "calc(100% - 50px)")}; */
        width : calc(100% - 50px) !important;
        }
   
    }
`;

