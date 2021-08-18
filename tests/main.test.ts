import { TejucoParkingLot } from "./../src/main";
import {
  Car,
  SmallSpot,
  MediumSpot,
  LargeSpot,
  Motorbycle,
  Truck,
} from "../src/main";

describe("vehicle parking", () => {
  it("car should be able to park in medium and large spots", () => {
    const car = new Car();
    const smallSpot = new SmallSpot();
    const mediumSpot = new MediumSpot();
    const largeSpot = new LargeSpot();

    expect(car.park(smallSpot)).toEqual(false);
    expect(car.park(mediumSpot)).toEqual(true);
    expect(car.park(largeSpot)).toEqual(true);
  });

  it("motorbycle should be able to park in small, medium and large spots", () => {
    const motorbycle = new Motorbycle();
    const smallSpot = new SmallSpot();
    const mediumSpot = new MediumSpot();
    const largeSpot = new LargeSpot();

    expect(motorbycle.park(smallSpot)).toEqual(true);
    expect(motorbycle.park(mediumSpot)).toEqual(true);
    expect(motorbycle.park(largeSpot)).toEqual(true);
  });

  it("truck should be able to park in medium and large spots", () => {
    const truck = new Truck();
    const smallSpot = new SmallSpot();
    const mediumSpot = new MediumSpot();
    const largeSpot = new LargeSpot();

    expect(truck.park(smallSpot)).toEqual(false);
    expect(truck.park(mediumSpot)).toEqual(false);
    expect(truck.park(largeSpot)).toEqual(true);
  });
});

describe("parking lot", () => {
  it("can park car in correct spots", () => {
    // ARRANGE
    const car = new Car();
    const smallSpot = new SmallSpot();
    const mediumSpot = new MediumSpot();
    const largeSpot = new LargeSpot();

    const parkingLot = new TejucoParkingLot();

    // ACT
    const canParkSmall = () => parkingLot.parkVehicle(car, smallSpot);
    const canParkMedium = () => parkingLot.parkVehicle(car, mediumSpot);
    const canParkLarge = () => parkingLot.parkVehicle(car, largeSpot);

    // ASSERT
    expect(canParkSmall).toThrowError();
    expect(canParkMedium).not.toThrowError();
    expect(canParkLarge).not.toThrowError();
  });

  it("can park motorbycle in correct spots", () => {
    // ARRANGE
    const motorbycle = new Motorbycle();
    const smallSpot = new SmallSpot();
    const mediumSpot = new MediumSpot();
    const largeSpot = new LargeSpot();

    const parkingLot = new TejucoParkingLot();

    // ACT
    const canParkSmall = () => parkingLot.parkVehicle(motorbycle, smallSpot);
    const canParkMedium = () => parkingLot.parkVehicle(motorbycle, mediumSpot);
    const canParkLarge = () => parkingLot.parkVehicle(motorbycle, largeSpot);

    // ASSERT
    expect(canParkSmall).not.toThrowError();
    expect(canParkMedium).not.toThrowError();
    expect(canParkLarge).not.toThrowError();
  });

  it("can park truck in correct spots", () => {
    // ARRANGE
    const truck = new Truck();
    const smallSpot = new SmallSpot();
    const mediumSpot = new MediumSpot();
    const largeSpot = new LargeSpot();

    const parkingLot = new TejucoParkingLot();

    // ACT
    const canParkSmall = () => parkingLot.parkVehicle(truck, smallSpot);
    const canParkMedium = () => parkingLot.parkVehicle(truck, mediumSpot);
    const canParkLarge = () => parkingLot.parkVehicle(truck, largeSpot);

    // ASSERT
    expect(canParkSmall).toThrowError();
    expect(canParkMedium).toThrowError();
    expect(canParkLarge).not.toThrowError();
  });
});
