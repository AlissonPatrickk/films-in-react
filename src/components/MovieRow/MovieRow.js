import React, { useState } from "react";
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './styles.css';

export default ({ title, items }) => {
    const [ scroll, setScroll] = useState(0)
    const arrowLeft = () => {
        let x = scroll + 150;
        if(x > 0) {
            x = 0;
        }
        setScroll(x);
    }
    
    const arrowRight = () => {
    
    
    }
    return (
        <div className="movieRow">
            <h2>{title}</h2>
                <div className="row-left">
                <NavigateBeforeIcon  onClick={arrowLeft} style={{fontSize: 50}} />
                </div>
                <div className="row-right" >
                <NavigateNextIcon onClick={arrowRight} style={{fontSize: 50}}/>                 
                </div>
            <div className="movieRow-listAre">
                <div className="movieRow-list" style={{
                    marginLeft: scroll,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow-item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}