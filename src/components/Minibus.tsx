import Vehicle from './Vehicle';
// type imports
import { type VehicleProps } from './Vehicle';

class Minibus extends Vehicle {
    constructor(props: VehicleProps) {
        super(props);
    }

    render(): JSX.Element {
    // JSX específico para el componente Bus
        return (
            <div className="minibus">
            {/* Elementos del Bus aquí */}
            </div>
        );
    }
}

export default Minibus;
