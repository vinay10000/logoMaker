import React, { useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { useState, useContext } from "react";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/src/context/UpdateStorageContext";
const BackgroundController = () => {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [rounded, setRounded] = useState(storageValue ? storageValue?.Backgroundrounded : 0);
  const [padding, setPadding] = useState(storageValue ? storageValue?.Backgroundpadding : 0);
  const [color, setColor] = useState(storageValue ? storageValue?.Backgroundcolor : "#fff");
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      Backgroundrounded: rounded,
      Backgroundpadding: padding,
      Backgroundcolor: color,
    };
    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
  })
  return (
    <div>
      <div className="py-3">
        <label className="p-2 flex justify-between items-center">
          Rounded <span>{rounded} deg</span>
        </label>
        <Slider
          defaultValue={[0]}
          max={512}
          step={1}
          onValueChange={(value) => setRounded(value[0])}
        />
      </div>
      <div className="py-3">
        <label className="p-2 flex justify-between items-center">
          Padding <span>{padding} deg</span>
        </label>
        <Slider
          defaultValue={[40]}
          max={100}
          step={1}
          onValueChange={(value) => setPadding(value[0])}
        />
      </div>
      <div className="py-3">
        <label className="p-2 flex justify-between items-center">
          Background Color
        </label>
        <ColorPickerController
          hideController={false}
          selectedColor={(color) => setColor(color)}
        />
      </div>
    </div>
  );
};

export default BackgroundController;
