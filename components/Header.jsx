import React from "react";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
const Header = ({DownloadIcon}) => {
  return (
    <div className="p-4 w-screen shadow-2xl border flex justify-between items-center sticky top-0 bg-white z-10">
      <img src="/logo.svg" alt="" />
      <div className="w-1/2">
        <h1 className="text-3xl font-bold">Logo Maker</h1>
        <p>Create your own logo</p>
      </div>
      <div className="w-1/2 flex justify-end items-center">
        <Button variant="default" size="lg" className="mr-2 p-6 gap-1"onClick={() =>DownloadIcon(Date.now())}>
         <Download /> Download
        </Button>
      </div>
    </div>
  );
};

export default Header;
