import './App.css'
import ProgressLG from "./components/ProgressMd.jsx";
import ProgressSM from "./components/ProgressSM.jsx";

const stops = [
    {position: 0, name: 'Paris'},
    {position: 20, name: 'Marseille'},
    {position: 40, name: 'Lyon'},
    {position: 60, name: 'Toulouse'},
    {position: 80, name: 'Nice'},
    {position: 86, name: 'Nantes'},
    {position: 100, name: 'Strasbourg'},
];

const App = () => {
    const currentPosition = 40;

    return (
        <div>
            <h3>Position en temps réelle du train</h3>
            <div>
                <ProgressSM stops={stops} currentPosition={currentPosition}/>
            </div>
        </div>
    );
};
export default App
