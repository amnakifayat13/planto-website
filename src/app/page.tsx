
import Main from "./main/page"
import Selling from "./selling/page"
import Review from "./review/page"
import OurBest from "./ourbest/page"

export default function Home() {
  return (
    <>
    <div className="overflow-hidden">
    <Main/>
    <Selling/>
    <Review/>
    <OurBest/>
    </div>
    </>
    
  );
}
