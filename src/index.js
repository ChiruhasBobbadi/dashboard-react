
import ReactDOM from 'react-dom/client';
import App from './App';

export const DEVICE_METER_TYPES = {
    ELECTRIC: "ELECTRIC",
    WATER: "WATER",
};

export const DRAWER_MODES = {
    VIEW: "VIEW",
    CREATE: "CREATE",
    UPDATE: "UPDATE",
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);

