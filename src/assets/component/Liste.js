import SearchAppBar from "./Header";
import Fetch from "../../Fetch";
import Footer from "./Footer";

export default function Liste(){
        return(
            <div>
                <SearchAppBar/>
                <Fetch/>
                <Footer/>
            </div>
        )
}