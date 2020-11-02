import React from 'react'
import { MyConsumer } from "../context";
import styled from "styled-components";
export default function Sliderbar() {
    return (
        <MyConsumer>
            {value => {
               
                return (
                    <div>
                        this is slider bar component
                    </div>
                )
            }}
        </MyConsumer>
    )
}
