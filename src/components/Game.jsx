import React from "react";

export default function Game(){
    const dirt ={
        name:"dirt",
        iconSrc: "/dirt.png",
        seedlingSrc: "/dirt.png",
        grownSrc: "/dirt.png"
    }
    const wheat = {
        name: "Wheat",
        iconSrc: "/wheatIcon.jpg",
        seedlingSrc: "/sprout.png",
        grownSrc: "/wheat-grown.png"
    }
    const flower = {
        name: "Flower",
        iconSrc: "/flower-icon.jpg",
        seedlingSrc: "/sprout.png",
        grownSrc: "/flower-bud.png"
    }
    const tree = {
        name: "Tree",
        iconSrc: "/tree-icon.jpg",
        seedlingSrc: "/sprout.png",
        grownSrc: "/tree-grown.png"
    }

   
    const [farmItems, setFarmItems] = React.useState([
            {position: 0, block: dirt, isWatered: false},
            {position: 1, block: dirt, isWatered: false},
            {position: 2, block: dirt, isWatered: false}
        ]);
    const [currentSeed, setCurrentSeed] = React.useState(wheat);

    

    const mappedFarmItems = farmItems.map((item)=>{
        if(item.block.name === "dirt"){
            return(<div key={item.position}>
                <button className="plantButton" onClick={()=>{addSeed(item.position,currentSeed)}}>Plant a seed</button>
                <img className = "farm-img" src = {item.block.iconSrc} alt = {item.block.name}></img>
            </div>)
        }else{
            return (<div key={item.position}><p>{item.block.name}</p><img className="farm-img" src={(item.isWatered ? item.block.grownSrc : item.block.seedlingSrc)} alt={item.block.name}></img></div>)
        }
    })
        
    function addDirt(){
        setFarmItems((prev)=>[...prev,{position: prev.length, block: dirt}])
    }
    function addSeed(location, seed) {   
        setFarmItems((prev)=>{
            const newGrid = [...prev]
            newGrid[location] = {position: location, block: seed, button: <button className="plantButton" onClick={()=>{addSeed(location)}}>Plant a seed</button>}
            return newGrid
        })
    }

    function waterPlants() {
        setFarmItems((prev) => {
            return (prev.map((item) => ({
                ...item,
                isWatered: true
            })))
        })
    }
    
    function updateCurrentSeed(plant){
        switch (plant.name){
            case "Wheat":
                setCurrentSeed(wheat);
                break;
            case "Flower":
                setCurrentSeed(flower);
                break;
            case "Tree":
                setCurrentSeed(tree);
                break;
        }
    }
    
    return(
        <>
            <main>
                <div className="info">
                    <div className="description">This is our game, click a seed, then a square to plant in it.</div>
                    
                    
                </div>
                <section className="interface">
                    <div className = "bag">
                        <h2>Bag of seeds</h2>
                
                        <button className = "selectSeed" onClick={()=>{updateCurrentSeed(wheat)}}>Wheat</button>
                        <button className = "selectSeed" onClick={()=>{updateCurrentSeed(flower)}}>Flower</button>
                        <button className = "selectSeed" onClick={()=>{updateCurrentSeed(tree)}}>Tree</button>
                        <p>Currently selected seed: {currentSeed.name}</p>
                        {<img className="icon" src={currentSeed.iconSrc} alt={currentSeed.name + " icon"}/>}
                    </div>
                    <div>
                        <h2>Shop?</h2>
                        <button onClick={()=>{addDirt()}}>New plot</button>
                    </div>
                    <div>
                        <h2>Tools?</h2>
                        <button className="selectSeed" onClick = {waterPlants}>Water all Plants</button>
                    </div>
                </section>
                
                
                <div className="play">
                    
                    <section className="farm">
                        {mappedFarmItems}  
                    </section>
                
                    </div>
                
            </main>
        </>
    )
}