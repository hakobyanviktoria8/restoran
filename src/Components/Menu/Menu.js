import React, { useState, useEffect } from "react";
import "./Menu.css";
import RecipeReviewCard from "./Card";

export function Menu(props) {
    const [rowData, setRowData] = useState([]);

    useEffect(()=>{
        const fetchData  = async() => {
            let response = await fetch("https://forkify-api.herokuapp.com/api/search?q=chicken");
            if(response.ok){
                let dataArr = await response.json();
                setRowData(dataArr.recipes);
            } else{
                alert("Error")
            }
        };
        fetchData();
    },[]);

    // fetch("https://ghibliapi.herokuapp.com/people")
    //     .then((response) => response.json())
    //     .then((people) =>console.log(people));

    return(
        <div>

            {console.log(rowData)}
            {
                rowData.map(item=>
                    <RecipeReviewCard key={item.recipe_id} item={item}/>
                )
            }
        </div>
    )
}