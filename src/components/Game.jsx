import React from "react"

export default function Game(){
    const seedling = <a href="https://www.flaticon.com/free-icons/sprout" title="sprout icons"></a>
    const [bagItems, setBagItems] = React.useState(["wheat"]);
    const [farmItems, setFarmItems] = React.useState([])

    
    return(
        <>
            <div className="description">This is our game, click a square to plant in it.</div>

            <section className="farm">
                <div className="farmRow">
                    <button></button>
                    <button></button>
                </div>
                <div className="farmRow">
                    <button></button>
                    <button></button>
                </div>
            </section>
            <section className="bag">
                <ul>

                </ul>
            </section>




        </>
    )
}