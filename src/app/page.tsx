import Image from "next/image";
import Main from "./main/page"
import Selling from "./selling/page"

export default function Home() {
  return (
    <>
    <div className="overflow-hidden">
    <Main/>
    <Selling/>
    </div>
    </>
    
  );
}
