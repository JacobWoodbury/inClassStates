import React from "react";

export default function Game(){
    const seedling = <a href="https://www.flaticon.com/free-icons/sprout" title="sprout icons"></a>
    const [bagItems, setBagItems] = React.useState(["wheat", "flower"]);
    const [farmItems, setFarmItems] = React.useState([]);
    const [currentSeed, setCurrentSeed] = React.useState("Wheat");

    const mappedFarmItems = farmItems.map((item) => (plant(item)))
    function addSeed() {
        
        setFarmItems((prev) => {
           return([...prev, currentSeed])
        })
            
        
    }   
    function plant(current){
        return(<li>{current}</li>)
    }
    
    
    return(
        <>
            <div className="description">This is our game, click a square to plant in it.</div>

            <section className="farm">
                <button className="plantButton" onClick={addSeed}>Plant a seed</button>
                {mappedFarmItems}
                
            </section>
            <section className="bag">
                <ul>

                </ul>
            </section>




        </>
    )
}