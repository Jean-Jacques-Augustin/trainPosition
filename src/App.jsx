import './App.css'
import ProgressLG from "./components/ProgressMd.jsx";
import ProgressSM from "./components/ProgressSM.jsx";
import ProgressMd from "./components/ProgressMd.jsx";

const stops = [{position: 0, name: 'Paris'}, {position: 20, name: 'Marseille'}, {
    position: 40, name: 'Lyon'
}, {position: 60, name: 'Toulouse'}, {position: 80, name: 'Nice'}, {position: 86, name: 'Nantes'}, {
    position: 100, name: 'Strasbourg'
},];

const App = () => {
    const currentPosition = 50;

    return (<div>
        <h3>Position en temps réelle du train</h3>
        <div
            // gerer l'overflow et fixer la largeur du container pour que le scroll soit visible
            style={{
                width: '500px',
                overflowX: 'scroll',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}

        >
            <div
                style={{
                    width: '900px'
                }}
            >
                <ProgressMd stops={stops} currentPosition={currentPosition}/>
            </div>
        </div>

    </div>);
};
export default App
