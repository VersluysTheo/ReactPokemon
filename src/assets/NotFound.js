import SearchAppBar from './component/Header';
import './NotFound.css';

export default function NotFound(){
    return(
        <div className="Error">
            <SearchAppBar/>
            <h1> Tiens ma source m'indique que cette page n'existe pas. Dommage
            </h1>
        </div>
    )
}