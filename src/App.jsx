import './App.css'
import ProgressLG from "./components/ProgressMd.jsx";

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
            <h6>Position en temps réelle du train</h6>
            <ProgressLG stops={stops} currentPosition={currentPosition}/>
        </div>
    );
};
export default App
