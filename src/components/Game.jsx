import React from "react";
import plantData from "../assets/plantData";
import Winner from "./Winner.jsx"
import Interface from "./Interface.jsx";

export default function Game(){
   
  
    const [wheatCount, setWheatCount] = React.useState(0)
    const [flowerCount, setFlowerCount] = React.useState(0)
    const [treeCount, setTreeCount] = React.useState(0)
    const [isWinner, setIsWinner] = React.useState(false)

    const [farmItems, setFarmItems] = React.useState([
            {position: 0, block: plantData.dirt, isWatered: false},
            {position: 1, block: plantData.dirt, isWatered: false},
            {position: 2, block: plantData.dirt, isWatered: false}
        ]);
    const [currentSeed, setCurrentSeed] = React.useState(plantData.wheat);

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
        setFarmItems((prev)=>[...prev,{position: prev.length, block: plantData.dirt}])
    }

    function addSeed(location, seed) { 
            switch (seed.name){
                case "Wheat":
                    setWheatCount((prev) => prev + 1);
                    break;
                case "Flower":
                    setFlowerCount((prev) => prev + 1);
                    break;
                case "Tree":
                    setTreeCount((prev) => prev + 1);
                    break;
            }
        setFarmItems((prev)=>{
            const newGrid = [...prev]
            newGrid[location] = {position: location, block: seed}
            return newGrid
        })
    }

    function waterPlants() {
        setFarmItems((prev) => {
            return (prev.map((item) => {
                return {...item,
                isWatered: true}
            }))

        })
        checkWin(farmItems)
    }
    
    function updateCurrentSeed(plant){
        switch (plant.name){
            case "Wheat":
                setCurrentSeed(plantData.wheat);
                break;
            case "Flower":
                setCurrentSeed(plantData.flower);
                break;
            case "Tree":
                setCurrentSeed(plantData.tree);
                break;
        }
    }

    function checkWin() {
        if(wheatCount > 1 && flowerCount > 1 && treeCount > 0){setIsWinner(true)}
        console.log("wheat: " + wheatCount)
        console.log(isWinner)
    }

    function showWinPage() {
        setIsWinner(false)
        setWheatCount(0)
        setFlowerCount(0)
        setTreeCount(0)
        setFarmItems([{position: 0, block: plantData.dirt, isWatered: false}, 
            {position: 1, block: plantData.dirt, isWatered: false}, 
            {position: 2, block: plantData.dirt, isWatered: false}]
        )
        setCurrentSeed(plantData.wheat)
    }

    return(
        <>
            {isWinner? <div> <Winner func={showWinPage}/></div> :
            <main>
                <div className="info">
                    <div className="description">This is our game, click a seed, then a square to plant in it.</div>          
                </div>
                <section className="interface">
                    <Interface updateCurrentSeed = {updateCurrentSeed} addDirt = {addDirt} waterPlants = {waterPlants} currentSeed = {currentSeed}/>
                    
                </section>   
                
                <div className="play">
                    
                    <section className="farm">
                        {mappedFarmItems}  
                    </section>
                
                    </div> 
            </main>}
        </>
    )
}