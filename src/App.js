import './App.css';
import Home from "./pages/Home";
import CodeTroopers from "./pages/CodeTroopers";
import Outscale from "./pages/3DSOutscale";
import Ubisoft from "./pages/Ubisoft";
import SFEIR from "./pages/SFEIR";
import Coddity from "./pages/Coddity";
import Navbar from "./components/Navbar";
import React, {createContext, useEffect, useState} from 'react';


const ContextContainer = createContext(null)


function App() {

    const [page, setPage] = useState("SEXINFO")
    const [pagesAreLoaded, setPagesAreLoaded] = useState(false)

    const pages = [
        {name: "SEXINFO", component: <Home />},
        {name: "3DS OUTSCALE", component: <Outscale />},
        {name: "UBISOFT", component: <Ubisoft />},
        {name: "SFEIR", component: <SFEIR />},
        {name: "CODDITY", component: <Coddity />},
        {name: "CODE-TROOPERS", component: <CodeTroopers />},
    ]

    const getPage = () => {
        return pages.find(p => p.name === page).component
    }

    useEffect(() => {
        setPagesAreLoaded(true)
    }, [pages, page])
    return (
      <>
          <ContextContainer.Provider value={{setPage, page}}>
              <Navbar ContextContainer={ContextContainer} />

              {
                  pagesAreLoaded
                    ? getPage()
                    : null
              }

          </ContextContainer.Provider>
      </>
    );
}

export default App;
