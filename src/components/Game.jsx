import React from "react"

export default function Game(){
    const seedling = <a href="https://www.flaticon.com/free-icons/sprout" title="sprout icons"></a>
    const [bagItems, setBagItems] = React.useState(["wheat"]);
    const [farmItems, setFarmItems] = React.useState(["","","",""]);
    const [currentSeed, setCurrentSeed] = React.useState("Wheat");

    function addSeed() {
        
        setFarmItems((prev) => {
            [...prev, currentSeed]
        })
            
        
    }   
    function plant(current){
        if(current === ""){
            return(<li key={Date.now()}><button className="plantButton" onClick={(addSeed)}>Plant Here</button></li>)
        }else{
            return(<li key={Date.now()}>{current}</li>)
        }
    }
    const mappedFarmItems = farmItems.map((item) => (plant(item)))
    
    return(
        <>
            <div className="description">This is our game, click a square to plant in it.</div>

            <section className="farm">
                {mappedFarmItems}
                
            </section>
            <section className="bag">
                <ul>

                </ul>
            </section>




        </>
    )
}