class Traveler {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType;
    this.myTrips = [];
  }

  findPastTrips() {
    return this.myTrips
  }
}

export default Traveler;
