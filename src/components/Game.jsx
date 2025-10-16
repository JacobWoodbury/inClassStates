import React from "react";

export default function Game(){
    const seedling = <a href="https://www.flaticon.com/free-icons/sprout" title="sprout icons"></a>
    const [bagItems, setBagItems] = React.useState(["wheat", "flower"]);
    const [farmItems, setFarmItems] = React.useState([]);
    const [currentSeed, setCurrentSeed] = React.useState();

    const mappedFarmItems = farmItems.map((item) => (plant(item)))

    function addSeed() {   
        setFarmItems((prev) => {
           return([...prev, currentSeed])
        })  
    }

    function plant(current){
        return(<li>{current}</li>)
    }
    
    function wheat() {
        setCurrentSeed("Wheat")
    }

    function flower() {
        setCurrentSeed("Flower")
    }

    return(
        <>
            <div className="description">This is our game, click a square to plant in it.</div>

            <section className="farm">
                <button className="plantButton" onClick={addSeed}>Plant a seed</button>
                <p>{currentSeed}</p>
                {mappedFarmItems}
                
            </section>
            <section className="bag">
                <ul>

                </ul>
            </section>

            <section className = "bag">
                <h2>Bag of seeds</h2>
                <button className = "selectSeed" onClick={wheat}>Wheat</button>
                <button className = "selectSeed" onClick={flower}>Flower</button>
            </section>

        </>
    )
}