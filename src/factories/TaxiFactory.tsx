// src/factories/BusFactory.ts
import Taxi from '../components/Taxi';
import type { VehicleProps } from '../components/Vehicle';
import {type IVehicleFactory} from './IVehicleFactory';

class TaxiFactory implements IVehicleFactory {
    createVehicle(props: VehicleProps) {
        return new Taxi(props);
    }
}

export default TaxiFactory;
