import { Smile } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useState,useEffect,useContext } from "react";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/src/context/UpdateStorageContext";
import IconList from "./IconList";
const IconController = () => {
  const storageValue = JSON.parse(localStorage.getItem("value"))
  const [size, setSize] = useState(storageValue?storageValue.Iconsize:280);
  const [rotate, setRotate] = useState(storageValue?storageValue.Iconrotate:0);
  const [color, setColor] = useState(storageValue?storageValue.Iconcolor:"#fff");
  const {updateStorage,setUpdateStorage} = useContext(UpdateStorageContext)
  const [icon,setIcon] = useState(storageValue?storageValue.icon:"Smile")
  useEffect(() => {
    
    const updatedValue = {
      ...storageValue,
      Iconsize: size,
      Iconrotate: rotate,
      Iconcolor: color,
      icon:icon
    }
    setUpdateStorage(updatedValue)
    localStorage.setItem("value", JSON.stringify(updatedValue))
    
  },[size,rotate,color,icon])
  return (
    <div>
      <div>
        <IconList selectedIcon={(icon)=>setIcon(icon)} />
        <div className="py-3">
          <label className="p-2 flex justify-between items-center">
            Size <span>{size}px</span>
          </label>
          <Slider
            defaultValue={[size]}
            max={512}
            step={1}
            onValueChange={(value) => setSize(value[0])}
          />
        </div>
        <div className="py-3">
          <label className="p-2 flex justify-between items-center">
            Rotate <span>{rotate} deg</span>
          </label>
          <Slider
            defaultValue={[rotate]}
            max={360}
            step={1}
            onValueChange={(value) => setRotate(value[0])}
          />
        </div>
        <div className="py-3">
          <label className="p-2 flex justify-between items-center">
            Icon Color
          </label>
          <ColorPickerController hideController={true} selectedColor={(color)=>setColor(color)} />
        </div>
      </div>
    </div>
  );
};

export default IconController;
