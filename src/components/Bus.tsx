import Vehicle from './Vehicle';
// type imports
import { type VehicleProps } from './Vehicle';

class Bus extends Vehicle {
    constructor(props: VehicleProps) {
        super(props);
    }

    getIcon(): string {
        return '🚌';
    }

    getColor(): string {
        return '#15374d';
    }
}

export default Bus;
