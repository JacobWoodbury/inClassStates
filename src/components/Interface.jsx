import plantData from "../assets/plantData"
export default function Interface({updateCurrentSeed, addDirt, waterPlants, currentSeed}){
    return(<>
    <div className = "bag">
                        <h2>Bag of seeds</h2>
                
                        <button className = "selectSeed" onClick={()=>{updateCurrentSeed(plantData.wheat)}}>Wheat</button>
                        <button className = "selectSeed" onClick={()=>{updateCurrentSeed(plantData.flower)}}>Flower</button>
                        <button className = "selectSeed" onClick={()=>{updateCurrentSeed(plantData.tree)}}>Tree</button>
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
    </>)
}