import { UpdateStorageContext } from "@/src/context/UpdateStorageContext";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import React, { useEffect , useState, useContext }  from "react";
const BASE_URL = "https://logoexpress.tubeguruji.com";

const LogoPreview = ({downloadIcon}) => {
    const [storageValue, setStorageValue] = useState();
    const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
    useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);
  const Icon = ({name,color,size})=>{
    const LucidIcon = icons[name]
    if(!LucidIcon){
      return null
    }
    return <LucidIcon size={size} color={color} style={{transform: `rotate(${storageValue?.Iconrotate}deg)`}}/>   
  }
  useEffect(() => {
    if(downloadIcon){
      downloadLogo()
    }
  },[downloadIcon])
  const downloadLogo = ()=>{
      const downloadLogoDiv = document.getElementById("downloadLogoDiv");
      html2canvas(downloadLogoDiv,{
        backgroundColor:null
      }).then((canvas)=>{
        const pngImg = canvas.toDataURL("image/png")
        const downloadLink = document.createElement("a")
        downloadLink.href = pngImg
        downloadLink.download = "logo.png"
        downloadLink.click()
      })
  }
  return (
    <div className="flex justify-center items-center  ">
      <div className="h-[500px] w-[500px] outline-dotted outline-gray-400" style={{ padding: storageValue?.Backgroundpadding }}>
        <div id="downloadLogoDiv"
          className="h-full w-full flex items-center justify-center"
          style={{ background: storageValue?.Backgroundcolor, borderRadius: storageValue?.Backgroundrounded }}
        >
          {storageValue?.icon?.includes('.png')?<img src={BASE_URL+"/png/"+storageValue?.icon} className="w-[400px] h-[400px]" style={{transform: `rotate(${storageValue?.Iconrotate}deg)`,height:storageValue?.Iconsize,width:storageValue?.Iconsize}}/>:<Icon name={storageValue?.icon} color={storageValue?.Iconcolor} size={storageValue?.Iconsize} />}
          {/* <Icon name={storageValue?.icon} color={storageValue?.Iconcolor} size={storageValue?.Iconsize} /> */}
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
