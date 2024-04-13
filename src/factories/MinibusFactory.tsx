// src/factories/BusFactory.ts
import Minibus from '../components/Minibus';
import type { VehicleProps } from '../components/Vehicle';
import {type IVehicleFactory} from './IVehicleFactory';

class MinibusFactory implements IVehicleFactory {
    createVehicle(props: VehicleProps) {
        return <Minibus {...props} />;
    }
}

export default MinibusFactory;
