export default function Farm({farmItems, func, currentSeed}) {
    const mappedFarmItems = farmItems.map((item)=>{
        if(item.block.name === "dirt"){
            return(<div key={item.position}>
                <button className="plantButton" onClick={() => (func(item.position, currentSeed))}>Plant a seed</button>
                <img className = "farm-img" src = {item.block.iconSrc} alt = {item.block.name}></img>
            </div>)
        }else{
            return (<div key={item.position}><p>{item.block.name}</p><img className="farm-img" src={(item.isWatered ? item.block.grownSrc : item.block.seedlingSrc)} alt={item.block.name}></img></div>)
        }
    })
    return mappedFarmItems
}