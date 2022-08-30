import React from "react";

export default ({title, items}) => {
    return(
        <div>
            <h2>{title}</h2>
            <div className="movie-Row--listare">
                {items.results.length > 0 && items.results.map((item,key)=>(
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                ))}
            </div>
        </div>
    )
}