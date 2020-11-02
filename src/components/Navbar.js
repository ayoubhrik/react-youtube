import React from 'react'
import { MyConsumer } from "../context";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { MdVideoCall, MdApps, MdNotifications, MdSearch, MdArrowBack } from "react-icons/md";
import logo from "../images/yt_logo_rgb_light.png";
import avatar from "../images/avatar.jpg";
export default function Navbar() {
    return (
        <MyConsumer>
            {value => {
                const { handleSidebar, handleSearchbar, searchbarOpen, sidebarOpen , handleSearch,inputSearchValue} = value;
                return (
                    <Nav>
                        <NavbarWrapper show={searchbarOpen}>
                            <NavbarLeft>
                                <FiMenu className="nav-icon humbericon" onClick={handleSidebar} />
                                <img src={logo} alt="logo" />
                            </NavbarLeft>
                            <NavbarInput>
                                <input placeholder="Search" type="text" value={inputSearchValue} onChange={(e) => handleSearch(e)}/>
                                <Link to={`/search/${inputSearchValue}`}> <MdSearch className="search-nav-icon" /></Link>
                            </NavbarInput>
                            <NavbarIcons>
                                <MdSearch className="nav-icon search-icon-mobile" onClick={(e) => handleSearchbar(e)} />
                                <MdVideoCall className="nav-icon" />
                                <MdApps className="nav-icon" />
                                <MdNotifications className="nav-icon" />
                                <img className="avatar" alt="Avatar image" src={avatar}></img>
                            </NavbarIcons>

                        </NavbarWrapper>
                        <SearchNavbarWrapper show={searchbarOpen}>
                            <MdArrowBack className="nav-icon" onClick={handleSearchbar}  />
                            <NavbarInput size="60vh">
                                <input placeholder="Search" type="text" />
                                <Link to="/search/"> <MdSearch className="search-nav-icon" /></Link>
                            </NavbarInput>
                        </SearchNavbarWrapper>
                    </Nav>
                )
            }}
        </MyConsumer>
    )
}
const Nav = styled.div`
    .nav-icon {
    font-size:1.5rem;
    margin-right:24px;
    color: var(--grey);
}
`;
const SearchNavbarWrapper = styled.div`
display : none;
height: 56px;
align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #fff;
    border-bottom: 1px solid var(--lightGrey);
@media screen and (max-width: 600px) {
   display: ${props => (props.show ? "flex" : "none")};
   position: fixed;
    width: -webkit-fill-available;
}
`;
const NavbarWrapper = styled.div`
display: flex;
height: 56px;
align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    position: -webkit-sticky;
    position: fixed;
    width: calc(100% - 20px);
    top: 0;
    z-index: 100;
    background-color: #fff;
    border-bottom: 1px solid var(--lightGrey);
    img{
        height:23px;
    }

@media screen and (max-width: 600px) {
   display: ${props => (props.show ? "none" : "flex")};
}
`;
const NavbarLeft = styled.div`

.humbericon {
    font-size:1.3rem !important;
margin-right:24px;
cursor: pointer;
}
`;


const NavbarInput = styled.div.attrs(props => ({
    size: props.size || "40%",
  }))`
   
    display: flex;
    align-items: center;
    width: ${props => props.size};
    border: 1px solid #d3d3d3;
    .search-nav-icon{
        fill: var(--grey);
    height: 1em;
    display: inline-block;
    font-size: 1.5rem;
    width: 50px!important;
    background-color: #fafafa;
    border-left: 1px solid #d3d3d3;
    color: grey;
    }
    input {
        padding: 5px 10px;
            flex: 1 1;
    border: none;
    }
    @media screen and (max-width: 600px) {
         display: ${props => (props.show || props.size === "40%" ? "none" : "flex")};
    }
`;
const NavbarIcons = styled.div`
    display: flex;
    align-items: center;
    .avatar{
        border-radius: 50%;
        width: 32px;
        height: 32px;
        margin-right:16px;
    }
    .search-icon-mobile{
        display : none;
    }
    @media screen and (max-width: 600px) {
        .search-icon-mobile{
        display : block;
         cursor: pointer;
        }
    }
`;