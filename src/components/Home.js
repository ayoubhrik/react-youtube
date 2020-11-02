import React from 'react'
import { MyConsumer } from "../context";
import styled from "styled-components";
export default function Home() {
    return (
        <MyConsumer>
            {value => {
                
                return (
                    <div>
                        this is home component
                    </div>
                )
            }}
        </MyConsumer>
    )
}
