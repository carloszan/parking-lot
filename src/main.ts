export interface Vehicle {
  park(spot: Spot): boolean;
}

export class Motorbycle implements Vehicle {
  park(spot: Spot): boolean {
    return spot.verifyVehicle(this);
  }
}

export class Car implements Vehicle {
  park(spot: Spot): boolean {
    return spot.verifyVehicle(this);
  }
}

export class Truck implements Vehicle {
  park(spot: Spot): boolean {
    return spot.verifyVehicle(this);
  }
}

export interface Spot {
  verifyVehicle(vehicle: Vehicle): boolean;
}

export class SmallSpot implements Spot {
  verifyVehicle(vehicle: Vehicle): boolean {
    if (vehicle instanceof Motorbycle) return true;
    return false;
  }
}

export class MediumSpot implements Spot {
  verifyVehicle(vehicle: Vehicle): boolean {
    if (vehicle instanceof Truck) return false;
    return true;
  }
}

export class LargeSpot implements Spot {
  verifyVehicle(vehicle: Vehicle): boolean {
    return true;
  }
}

export interface ParkingLot {
  parkVehicle(vehicle: Vehicle, spot: Spot): void;
  takeCar(vehicle: Vehicle): Vehicle;
}

export class TejucoParkingLot implements ParkingLot {
  parkVehicle(vehicle: Vehicle, spot: Spot): void {
    const canPark = vehicle.park(spot);

    if (!canPark) throw new Error(`can't park ${vehicle} to ${spot}`);
  }

  takeCar(vehicle: Vehicle): Vehicle {
    throw new Error("Method not implemented.");
  }
}
