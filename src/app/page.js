// import Image from "next/image";
// import header from "@/components/header";

import Filter from "@/components/Filter";
import Footer from "@/components/Footer";
import LastCommon from "@/components/LastCommon";
import LeftsideNav from "@/components/LeftsideNav";
import Righrside from "@/components/Righrside";
import TotalCard from "@/components/TotalCard";
// import { Content } from "next/font/google";

export default function Home() {
  return (
  
  <>
  <div className=" mt-10">
  <LeftsideNav/>
  <Righrside/>
  <div className=" w-full      flex justify-between  px-9 ">
    <div className=" ml-2 w-1/5">
    <Filter/>

    </div>
    <div className=" w-4/5  ">
    <TotalCard/>
    </div>
    
  </div>
  </div>
  <Footer/>
  </>
  );
}
