

export default function Fifa({tName, bestPlayer, marketValue}){
    
    return(
        <div className="student">
            <h3>Team Name: {tName} </h3>
            <h3>Best Player: {bestPlayer}</h3>
            <h3>Market Value: {marketValue} </h3>
        </div>
    )
}
