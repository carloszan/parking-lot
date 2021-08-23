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
  it("motorbycle should be able to park in small spots", () => {
    // ARRANGE
    const motorbycle = new Motorbycle();
    const smallSpot = new SmallSpot();

    // ACT
    motorbycle.park(smallSpot);

    // ASSERT
    expect(motorbycle.spot).toEqual(smallSpot);
  });

  it("motorbycle should be able to park in medium spots", () => {
    // ARRANGE
    const motorbycle = new Motorbycle();
    const mediumSpot = new MediumSpot();

    // ACT
    motorbycle.park(mediumSpot);

    // ASSERT
    expect(motorbycle.spot).toEqual(mediumSpot);
  });

  it("motorbycle should be able to park in large spots", () => {
    // ARRANGE
    const motorbycle = new Motorbycle();
    const largeSpot = new LargeSpot();

    // ACT
    motorbycle.park(largeSpot);

    // ASSERT
    expect(motorbycle.spot).toEqual(largeSpot);
  });

  it("car shouldnt be able to park in small spots", () => {
    // ARRANGE
    const car = new Car();
    const smallSpot = new SmallSpot();

    // ACT
    const error = () => car.park(smallSpot);

    // ASSERT
    expect(error).toThrowError();
  });

  it("car should be able to park in medium spots", () => {
    // ARRANGE
    const car = new Car();
    const mediumSpot = new MediumSpot();

    // ACT
    car.park(mediumSpot);

    // ASSERT
    expect(car.spot).toEqual(mediumSpot);
  });

  it("car should be able to park in large spots", () => {
    // ARRANGE
    const car = new Car();
    const largeSpot = new LargeSpot();

    // ACT
    car.park(largeSpot);

    // ASSERT
    expect(car.spot).toEqual(largeSpot);
  });

  it("truck shouldnt be able to park in small spots", () => {
    // ARRANGE
    const truck = new Truck();
    const smallSpot = new SmallSpot();

    // ACT
    const error = () => truck.park(smallSpot);

    // ASSERT
    expect(error).toThrowError();
  });

  it("truck shouldnt be able to park in medium spots", () => {
    // ARRANGE
    const truck = new Truck();
    const mediumSpot = new MediumSpot();

    // ACT
    const error = () => truck.park(mediumSpot);

    // ASSERT
    expect(error).toThrowError();
  });

  it("truck should be able to park in large spots", () => {
    // ARRANGE
    const truck = new Truck();
    const largeSpot = new LargeSpot();

    // ACT
    truck.park(largeSpot);

    // ASSERT
    expect(truck.spot).toEqual(largeSpot);
  });
});

describe("motorbycle parking lot", () => {
  it("can park motorbycle if there is a medium spot available", () => {
    // ARRANGE
    const motorbycle = new Motorbycle();
    const mediumSpot = new MediumSpot();

    const parkingLot = new TejucoParkingLot([], [mediumSpot], []);

    // ACT
    const canParkMotorbycle = () => parkingLot.parkVehicle(motorbycle);

    // ASSERT
    expect(canParkMotorbycle).not.toThrowError();
  });

  it("can park motorbycle if there is a large spot available", () => {
    // ARRANGE
    const motorbycle = new Motorbycle();
    const largeSpot = new LargeSpot();

    const parkingLot = new TejucoParkingLot([], [], [largeSpot]);

    // ACT
    const canParkMotorbycle = () => parkingLot.parkVehicle(motorbycle);

    // ASSERT
    expect(canParkMotorbycle).not.toThrowError();
  });

  it("can park motorbycle if there is only small spot available", () => {
    // ARRANGE
    const motorbycle = new Motorbycle();
    const smallSpot = new SmallSpot();

    const parkingLot = new TejucoParkingLot([smallSpot], [], []);

    // ACT
    const canParkMotorbycle = () => parkingLot.parkVehicle(motorbycle);

    // ASSERT
    expect(canParkMotorbycle).not.toThrowError();
  });
});

describe("car parking lot", () => {
  it("can park car if there is a medium spot available", () => {
    // ARRANGE
    const car = new Car();
    const mediumSpot = new MediumSpot();

    const parkingLot = new TejucoParkingLot([], [mediumSpot], []);

    // ACT
    const canParkCar = () => parkingLot.parkVehicle(car);

    // ASSERT
    expect(canParkCar).not.toThrowError();
  });

  it("can park car if there is a large spot available", () => {
    // ARRANGE
    const car = new Car();
    const largeSpot = new LargeSpot();

    const parkingLot = new TejucoParkingLot([], [], [largeSpot]);

    // ACT
    const canParkCar = () => parkingLot.parkVehicle(car);

    // ASSERT
    expect(canParkCar).not.toThrowError();
  });

  it("cannot park car if there is only small spot available", () => {
    // ARRANGE
    const car = new Car();
    const smallSpot = new SmallSpot();

    const parkingLot = new TejucoParkingLot([smallSpot], [], []);

    // ACT
    const canParkCar = () => parkingLot.parkVehicle(car);

    // ASSERT
    expect(canParkCar).toThrowError();
  });
});

describe("truck parking lot", () => {
  it("cannot park truck if there is a medium spot available", () => {
    // ARRANGE
    const truck = new Truck();
    const mediumSpot = new MediumSpot();

    const parkingLot = new TejucoParkingLot([], [mediumSpot], []);

    // ACT
    const canParkTruck = () => parkingLot.parkVehicle(truck);

    // ASSERT
    expect(canParkTruck).toThrowError();
  });

  it("can park truck if there is a large spot available", () => {
    // ARRANGE
    const truck = new Truck();
    const largeSpot = new LargeSpot();

    const parkingLot = new TejucoParkingLot([], [], [largeSpot]);

    // ACT
    const canParkTruck = () => parkingLot.parkVehicle(truck);

    // ASSERT
    expect(canParkTruck).not.toThrowError();
  });

  it("cannot park truck if there is only small spot available", () => {
    // ARRANGE
    const truck = new Truck();
    const smallSpot = new SmallSpot();

    const parkingLot = new TejucoParkingLot([smallSpot], [], []);

    // ACT
    const canParkTruck = () => parkingLot.parkVehicle(truck);

    // ASSERT
    expect(canParkTruck).toThrowError();
  });
});
