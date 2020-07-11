import React from 'react';
import NavBar from '../../components/nav_bar/index'
import Main from '../../components/main/index'
import Background from '../../components/background';


// const pages = [
//   {path: "options", component: Options}
// ]

const Root = () => {
  // const [path, setPath] = useState("")

  return (
    <>
    <Background width="100%">
      <NavBar />

    {/* {
      pages.map(page =>{
        if(page.path == path){
          return page.component
        }
      })
    } */}
      <Main />
    </Background>

    </>
    )
}

export default Root;
