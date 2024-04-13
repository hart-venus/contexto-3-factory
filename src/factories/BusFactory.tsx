// src/factories/BusFactory.ts
import Bus from '../components/Bus';
import type { VehicleProps } from '../components/Vehicle';
import {type IVehicleFactory} from './IVehicleFactory';

class BusFactory implements IVehicleFactory {
    createVehicle(props: VehicleProps) {
        return <Bus {...props} />;
    }
}

export default BusFactory;
