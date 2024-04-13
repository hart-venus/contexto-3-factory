// src/factories/VehicleFactory.ts
import React from 'react';
import { type VehicleProps } from '../components/Vehicle';

export interface IVehicleFactory {
    createVehicle(props: VehicleProps): React.ReactElement;
}
