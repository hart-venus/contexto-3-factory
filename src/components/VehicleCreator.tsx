import React, { useState } from 'react';
import BusFactory from '../factories/BusFactory';
import Vehicle from './Vehicle';
import MinibusFactory from '../factories/MinibusFactory';
import TaxiFactory from '../factories/TaxiFactory';

const vehicleFactories = {
    bus: new BusFactory(),
    minibus: new MinibusFactory(),
    taxi: new TaxiFactory(),
};


function VehicleCreator() {
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [vehicleType, setVehicleType] = useState('bus');
    const [placa, setPlaca] = useState('');
    const [modelo, setModelo] = useState('');

    const handleVehicleTypeChange = (event : React.ChangeEvent<HTMLSelectElement>) => {
        setVehicleType(event.target.value);
    };

    const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("vehicleType", vehicleType)
        const factory = vehicleFactories[vehicleType as keyof typeof vehicleFactories];
        const newVehicle = factory.createVehicle({ placa: placa, modelo: modelo });
        setVehicles([...vehicles, newVehicle]);
        return false;
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <label>
                Vehicle Type:
                <select value={vehicleType} onChange={handleVehicleTypeChange}>
                    <option value="bus">Bus</option>
                    <option value="minibus">Minibus</option>
                    <option value="taxi">Taxi</option>
                </select>

                </label>
                <label>
                    Placa:
                    <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} />
                </label>
                <label>
                    Modelo:
                    <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
                </label>
                <button type="submit">Create Vehicle</button>
            </form>

            <div id="vehicles">
                {vehicles.map((vehicle, index) => (
                <div key={index}>
                    <div id="vehicleCard" style={{backgroundColor: vehicle.getColor()}}>
                        <div id='vehicleIcon'>
                            { vehicle.getIcon() }
                        </div>

                        <div id='vehicleInfo'>
                            <h1> {vehicle.props.placa} </h1>
                            <p> {vehicle.props.modelo} </p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
}

export default VehicleCreator;