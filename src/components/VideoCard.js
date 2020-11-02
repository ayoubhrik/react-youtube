import React from 'react'
import { MyConsumer } from "../context";
import styled from "styled-components";
export default function VideoCard() {
    return (
        <MyConsumer>
            {value => {
                
                return (
                    <div>
                        this is search component
                    </div>
                )
            }}
        </MyConsumer>
    )
}
