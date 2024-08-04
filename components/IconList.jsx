import React, { useEffect } from "react";
import { icons } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Smile } from "lucide-react";
import { useState } from "react";
import { iconList } from "@/src/constants/icons";
import axios from "axios";
const BASE_URL = "https://logoexpress.tubeguruji.com";
const BASE_URL1 = "https://cdn.jsdelivr.net/npm/lucide-static@latest/icons/";
function IconList({ selectedIcon }) {
  const [openDialog, setOpenDialog] = useState(false);
  const [pngIconList, setPngIconList] = useState([]);
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [icon, setIcon] = useState(storageValue ? storageValue.icon : "Smile");
  useEffect(() => {
    getPngIcons();
  },[])
  const Icon = ({ name, color, size }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return null;
    }
    return <LucidIcon size={size} color={color} />;
  };
  const getPngIcons = () => {
    axios.get(BASE_URL+'/getIcons.php').then((response) => {
      console.log(response.data);
      setPngIconList(response.data);
    })
  };
  return (
    <div>
      <div>
        <label htmlFor=""> Icon</label>
        <div
          className="p-3 cursor-pointer bg-gray-200 my-2 rounded-md w-[50px] h-[50px] flex items-center justify-center"
          onClick={() => setOpenDialog(true)}
        >
          {icon.includes('.png')?<img src={BASE_URL+"/png/"+icon} className="w-[40px] h-[40px]"/>:<Icon name={icon} color={"#000"} size={20} />}
          
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Pick an Icon</DialogTitle>
            <DialogDescription>
              <Tabs defaultValue="icon" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="icon">Icons</TabsTrigger>
                  <TabsTrigger value="color-icons">Color Icons</TabsTrigger>
                </TabsList>
                <TabsContent value="icon">
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                    {iconList.map((icon, index) => (
                      <div
                        className="w-[50px] h-[50px] rounded-sm border flex items-center justify-center cursor-pointer"
                        onClick={() => {
                          selectedIcon(icon);
                          setOpenDialog(false);
                          setIcon(icon);
                        }}
                        key={index}
                      >
                        <Icon
                          key={index}
                          name={icon}
                          color={"#000"}
                          size={20}
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="color-icons">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px] p-6">
                    {pngIconList.map((icon, index) => (
                      <div
                        className="w-[50px] h-[50px] rounded-sm border flex items-center justify-center cursor-pointer"
                        onClick={() => {
                          selectedIcon(icon);
                          setOpenDialog(false);
                          setIcon(icon);
                        }}
                        key={index}
                      >
                        <img src={BASE_URL + "/png/"+icon} alt={icon} />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default IconList;
