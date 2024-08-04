import Header from "@/components/Header";
import "./App.css";
import { Button } from "@/components/ui/button";
import SideNav from "@/components/SideNav";
import IconController from "@/components/IconController";
import BackgroundController from "@/components/BackgroundController";
import { useState } from "react";
import LogoPreview from "@/components/LogoPreview";
import { UpdateStorageContext } from "./context/UpdateStorageContext";
function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [updateStorage,setUpdateStorage] = useState({})
  const [downloadIcon,setDownloadIcon] = useState(false)
  return (
    <>
      <UpdateStorageContext.Provider value={{updateStorage,setUpdateStorage}}>
        <Header DownloadIcon={setDownloadIcon}/>
        <div className="w-64 fixed">
          <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
        </div>
        <div className="ml-64 grid grid-cols-1 md:grid-cols-10">
          <div className="md:col-span-5 bg-green-500 p-5 shadow-md h-screen overflow-auto">
            {selectedIndex === 0 ? (
              <IconController />
            ) : (
              <BackgroundController />
            )}
          </div>
          <div className="md:col-span-5">
            <LogoPreview downloadIcon={downloadIcon} />
          </div>
        </div>
      </UpdateStorageContext.Provider>
    </>
  );
}

export default App;
