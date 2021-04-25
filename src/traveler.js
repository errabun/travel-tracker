import Trip from './trip';

class Traveler {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.travelerType = data.travelerType;
    this.myTrips = [];
  }

  calcPrevYearSpending(destinationData) {
    return this.myTrips.reduce((total, trip) => {
      let curYear = new Date().getFullYear();
      let tripYear = parseInt(trip.date.split('/')[0]);
      let getDestination = destinationData.find(destination => destination.id === trip.destinationID);
      if (tripYear === curYear - 1) {
        total += trip.getTotalWithAgentFee(getDestination)
      }
      return total;
    }, 0)
  }

  calcCurrentYearSpending(destinationData) {
    return this.myTrips.reduce((total, trip) => {
      let curYear = new Date().getFullYear();
      let tripYear = parseInt(trip.date.split('/')[0]);
      let getDestination = destinationData.find(destination => destination.id === trip.destinationID);
      if (tripYear === curYear) {
        total += trip.getTotalWithAgentFee(getDestination)
      }
      return total;
    }, 0)
  }

}

export default Traveler;
