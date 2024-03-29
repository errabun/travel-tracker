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

  getPendingTrips() {
    let pending = this.myTrips.filter(trip => trip.status === 'pending');
    if (pending.length === 0) {
      return `You currently don't have any pending trips!`
    } else {
      return pending;
    }
  }
}

export default Traveler;
