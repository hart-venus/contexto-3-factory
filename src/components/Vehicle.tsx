import React from 'react';

export interface VehicleProps {
    placa: string;
    modelo: string;
}

interface VehicleState {
    placa: string;
    modelo: string; 
}

abstract class Vehicle extends React.Component<VehicleProps, VehicleState> {
    constructor(props: VehicleProps) {
        super(props);
        this.state = {
            placa: props.placa,
            modelo: props.modelo
        };
    }

    abstract render(): JSX.Element;
}

export default Vehicle;