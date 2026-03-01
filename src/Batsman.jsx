import { useState } from "react";

export default function Batsman() {
    const [runs, setRuns] = useState(0);
    const [doubles, setDoubles] = useState(0);
    const [tripples, setTripples] = useState(0);
    const [fours, setFours] = useState(0);
    const [sixes, setSixes] = useState(0);

    const handleSingle = () => {
        const updatedRuns = runs + 1;
        setRuns(updatedRuns);
    }
    const handleTwo = () => {
        const updatedRuns = runs + 2;
        const updatedDoubles=doubles+1;
        setDoubles(updatedDoubles);
        setRuns(updatedRuns);
    }
    const handleTripple = () => {
        const updatedRuns = runs + 3;
        const updatedTripples=tripples+1;
        setTripples(updatedTripples);
        setRuns(updatedRuns);
    }
    const handleFour = () => {
        const updatedRuns = runs + 4;
        const updatedFours=fours+1;
        setFours(updatedFours);
        setRuns(updatedRuns);
    }
    const handleSix = () => {
        const updatedRuns = runs + 6;
        const updatedSixes=sixes+1;
        setSixes(updatedSixes);
        setRuns(updatedRuns);
    }
    return(
        <div>
            <h3>Player: Shaleh Ahmedh</h3>
            <p>Doubles: {doubles}</p>
            <p>Tripples: {tripples}</p>
            <p>Fours: {fours}</p>
            <p>Sixes: {sixes}</p>
            <h2 style={{color:'orange'}}>Total Runs</h2>
            <h3>Runs: {runs}</h3>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleTwo}>Double</button>
            <button onClick={handleTripple}>Tripple</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>Six!</button>
        </div>
    )
}