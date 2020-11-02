import React from 'react'
import { MyConsumer } from "../context";
import styled from "styled-components";
import { MdHome, MdWhatshot, MdSubscriptions, MdVideoLibrary, MdHistory, MdOndemandVideo, MdWatchLater, MdThumbUp, MdExpandMore, MdVideogameAsset, MdWifiTethering, MdPalette, MdLightbulbOutline, MdExpandLess } from "react-icons/md";
export default function Sidebar() {
    const MaterialIcon = ({ icon, linkText }) => {

        switch (icon) {
            case 'MdHome': return (<><MdHome className="sidebarIcons selected" /><span className="selected-text">{linkText}</span></>);
            case 'MdWhatshot': return (<><MdWhatshot className="sidebarIcons" /><span>{linkText}</span></>)
            case 'MdSubscriptions': return (<><MdSubscriptions className="sidebarIcons" /><span>{linkText}</span></>)
            case 'MdVideoLibrary': return (<><MdVideoLibrary className="sidebarIcons" /><span>{linkText}</span></>)
            case 'MdHistory': return (<><MdHistory className="sidebarIcons" /><span>{linkText}</span></>)
            case 'MdOndemandVideo': return (<><MdOndemandVideo className="sidebarIcons" /><span>{linkText}</span></>)
            case 'MdWatchLater': return (<><MdWatchLater className="sidebarIcons" /><span>{linkText}</span></>)
            case 'MdThumbUp': return (<><MdThumbUp className="sidebarIcons" /><span>{linkText}</span></>)
            case 'MdExpandMore': return (<><MdExpandMore className="sidebarIcons" /><span>{linkText}</span></>)
            case 'MdVideogameAsset': return (<><MdVideogameAsset className="sidebarIcons" /><span>{linkText}</span></>)
            case 'MdLightbulbOutline': return (<><MdLightbulbOutline className="sidebarIcons" /><span>{linkText}</span></>)
            case 'MdWifiTethering': return (<><MdWifiTethering className="sidebarIcons" /><span>{linkText}</span></>)
            case 'MdPalette': return (<><MdPalette className="sidebarIcons" /><span>{linkText}</span></>)
            case 'MdExpandLess': return (<><MdExpandLess className="sidebarIcons" /><span>{linkText}</span></>)
            default: return null
        }
    }
    return (
        <MyConsumer>
            {value => {
                const { sidebarOpen, showlessArray, showmoreArray, showmoreToggle, showmore } = value;
                let showmoreState = showmore ? 'expandedRows' : 'collapsedRows';

                return (
                    <NavSidebarWrapper show={sidebarOpen}>
                        <SidebarWrapper show={sidebarOpen}>
                            {showlessArray.map(link => {
                                return (
                                    <div key={link.id} className={`sidebarRow ${link.featured ? "featured" : "notfeatured"}`}>
                                        <MaterialIcon icon={link.icon} featured={link.featured} linkText={link.text} />
                                    </div>
                                );
                            })}

                            <div className={showmoreState}>
                                {showmoreArray.map(link => {
                                    return (
                                        <div key={link.id} className="sidebarRow notfeatured">
                                            <MaterialIcon icon={link.icon} featured={link.featured} linkText={link.text} />
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="sidebarRow expandRow notfeatured" onClick={showmoreToggle}>
                                {showmore ? <MaterialIcon icon="MdExpandLess" featured="notfeatured" linkText="Show less" /> : <MaterialIcon icon="MdExpandMore" featured="notfeatured" linkText="Show more" />}
                            </div>
                        </SidebarWrapper>
                    </NavSidebarWrapper>
                )
            }}
        </MyConsumer>
    )
}
const SidebarWrapper = styled.div`
border-right: 1px solid var(--lightGrey);
height: 100%;
margin-top: 57px;
background: var(--mainWhite);
width : ${props => (props.show ? "240px" : "70px")};
/*flex: ${props => (props.show ? "0.2" : "0.05")} 1;*/
transition: var(--mainTransition);
.sidebarRow{
    display: flex;
    flex-direction: ${props => (props.show ? "row" : "column")};
    align-items: center;
    padding: ${props => (props.show ? "10px 20px" : "20px")};
}
.sidebarRow:hover{
    background-color: var(--bgGreyColor);
    transition: var(--mainTransition);
}
.sidebarRow span {
    flex: 1 1;
    margin-left: ${props => (props.show ? "20px" : "0px")};
    font-size: ${props => (props.show ? "14px" : "9px")};
    font-weight: 400;
    color: var(--grey);
    transition: var(--mainTransition);
}
.sidebarIcons{
    font-size: 24px;
    color: var(--grey);
}

.notfeatured{
    display : ${props => (props.show ? "" : "none")};
    transition: var(--mainTransition);
}
.selected{
    color: var(--redColor) !important;
}
.selected-text{
    font-weight: 500 !important;
    color: ${props => (props.show ? "var(--grey)" : "var(--redColor)")} !important;
}
.expandRow{
    cursor: pointer;
}
.collapsedRows{
    display:none;
}

@media screen and (max-width: 600px) {
    position: fixed;
   
}

`;
const NavSidebarWrapper = styled.div`
@media screen and (max-width: 600px) {
    width: 100%;
    height:100%;
    background-color: #00000061;
    position:fixed;
    z-index : 95;
    display : ${props => (props.show ? "" : "none")};
}
`;