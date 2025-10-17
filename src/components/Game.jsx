import React from "react";

export default function Game(){
    const seedling = <img className="sproutImage" src="/sprout.png" alt="sprout icons"/>
    const flowerImage = <img className="flowerImage" src="/flower-bud.png" alt="flower"/>
    const [bagItems, setBagItems] = React.useState(["Wheat", "Flower"]);
    const [farmItems, setFarmItems] = React.useState([
            {position: 0, block: "dirt"},
            {position: 1, block: "dirt"},
            {position: 2, block: "dirt"}
        ]);
    const [currentSeed, setCurrentSeed] = React.useState("Wheat");



    const mappedFarmItems = farmItems.map((item)=>{
        if(item.block === "dirt"){
            return(<div key={item.position}>
                <button className="plantButton" onClick={()=>{addSeed(item.position,currentSeed)}}>Plant a seed</button>
            </div>)
        }else{
            const imgType = item.block === "Flower" ? flowerImage : seedling;
            return (<div key={item.position}><p>{item.block}</p>{imgType}</div>)
        }
    })
        

    function addSeed(location, seed) {   
        setFarmItems((prev)=>{
           
            
            const newGrid = [...prev]
            newGrid[location] = {position: location, block: seed, button: <button className="plantButton" onClick={()=>{addSeed(location)}}>Plant a seed</button>}
            return newGrid
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
            <p>Currently selected seed: {currentSeed}</p>
            <section className="farm">
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