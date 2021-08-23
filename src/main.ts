export interface Vehicle {
  id: string;
  park(spot: Spot): void;
}

export abstract class AbstractVehicle implements Vehicle {
  id: string = "";
  spot: Spot | undefined = undefined;

  park(spot: Spot): void {
    if (!spot.verifyVehicle(this))
      throw new Error(`can't park the vehicle ${this} on the spot ${spot}`);

    spot.parkVehicle(this);
    this.spot = spot;
  }
}

export class Motorbycle extends AbstractVehicle {}

export class Car extends AbstractVehicle {}

export class Truck extends AbstractVehicle {}

export interface Spot {
  verifyVehicle(vehicle: Vehicle): boolean;
  parkVehicle(vehicle: Vehicle): void;
}

export abstract class AbstractSpot implements Spot {
  vehicle: Vehicle | undefined;

  verifyVehicle(vehicle: Vehicle): boolean {
    throw new Error("not implemented");
  }

  parkVehicle(vehicle: Vehicle) {
    if (!this.verifyVehicle(vehicle))
      throw new Error("cant park this vehicle in this spot");
    this.vehicle = vehicle;
  }
}

export class SmallSpot extends AbstractSpot {
  verifyVehicle(vehicle: Vehicle): boolean {
    if (vehicle instanceof Motorbycle) return true;
    return false;
  }
}

export class MediumSpot extends AbstractSpot {
  verifyVehicle(vehicle: Vehicle): boolean {
    if (vehicle instanceof Truck) return false;
    return true;
  }
}

export class LargeSpot extends AbstractSpot {
  verifyVehicle(vehicle: Vehicle): boolean {
    return true;
  }
}

export interface ParkingLot {
  parkVehicle(vehicle: Vehicle): void;
  takeCar(vehicle: Vehicle): Vehicle;
}

export class TejucoParkingLot implements ParkingLot {
  private availableSmallSpots: SmallSpot[];
  private availableMediumSpots: MediumSpot[];
  private availableLargeSpots: LargeSpot[];

  private parkedVehicles: Record<string, Spot> = {};

  constructor(
    availableSmallSpots: SmallSpot[],
    availableMediumSpots: MediumSpot[],
    availableLargeSpots: LargeSpot[]
  ) {
    this.availableSmallSpots = availableSmallSpots;
    this.availableMediumSpots = availableMediumSpots;
    this.availableLargeSpots = availableLargeSpots;
  }

  parkVehicle(vehicle: Vehicle): void {
    const spot = this.getSpotForVehicle(vehicle);

    if (!spot) throw new Error("No spot available");

    try {
      vehicle.park(spot);
      this.parkedVehicles[vehicle.id] = spot;
    } catch (error) {
      throw error;
    }
  }

  takeCar(vehicle: Vehicle): Vehicle {
    throw new Error("Method not implemented.");
  }

  getSpotForVehicle(vehicle: Vehicle): Spot | undefined {
    const smallSpot = this.availableSmallSpots.slice(-1)[0];
    if (smallSpot && smallSpot.verifyVehicle(vehicle))
      return this.availableSmallSpots.pop();

    const mediumSpot = this.availableMediumSpots.slice(-1)[0];
    if (mediumSpot && mediumSpot.verifyVehicle(vehicle))
      return this.availableMediumSpots.pop();

    const largeSpot = this.availableLargeSpots.slice(-1)[0];
    if (largeSpot && largeSpot.verifyVehicle(vehicle))
      return this.availableLargeSpots.pop();
  }
}
