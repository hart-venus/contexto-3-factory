// src/factories/VehicleFactory.ts
import React from 'react';
import Vehicle, { type VehicleProps } from '../components/Vehicle';

export interface IVehicleFactory {
    createVehicle(props: VehicleProps): Vehicle;
}
