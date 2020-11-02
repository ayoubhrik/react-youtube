import React, { Component } from "react";
import { linkData } from "./linkData";
import { videosData } from "./videosData";
import { filterOptions } from "./filterOptions";
const MyContext = React.createContext();
//Provider
//Consumer
class MyProvider extends Component {
  state = {
    links: linkData,
    filterOptions : filterOptions,
    sidebarOpen : true,
    searchbarOpen : false,
    showmore : false,
    showmoreArray:[],
    showlessArray:[],
    listVideos: videosData,
    inputSearchValue : ''
  };
  searchResults = id => {
    let filtredVideos = this.state.listVideos.filter(video => video.title.includes(id))
    return filtredVideos;
  }
  handleSearch = e => {
    e.preventDefault();
    this.setState({ inputSearchValue: e.target.value });
  };

  handleSidebar = e => {
    e.preventDefault();
    this.setState({ sidebarOpen: !this.state.sidebarOpen });
  };
  showmoreToggle = e => {
    e.preventDefault();
    this.setState({ 
      showmore: !this.state.showmore,
     });
  };
  handleSearchbar = e => {
    e.preventDefault();
    this.setState({ searchbarOpen: !this.state.searchbarOpen });
  };


  componentDidMount() {
    let filtredMoreLinkArray = linkData.filter(link => link.hidden === true);
    let filtredLessLinkArray = linkData.filter(link => link.hidden === false);
   this.setState({
      showmoreArray:filtredMoreLinkArray,
      showlessArray:filtredLessLinkArray
   })
  }

  

  render() {
    return (
      <MyContext.Provider
        value={{
          ...this.state,
          handleSidebar : this.handleSidebar,
          showmoreToggle: this.showmoreToggle,
          handleSearchbar : this.handleSearchbar,
          handleSearch:this.handleSearch,
          searchResults:this.searchResults
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

const MyConsumer = MyContext.Consumer;

export { MyProvider, MyConsumer };
