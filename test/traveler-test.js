import { expect } from 'chai';

import Traveler from '../src/traveler';
import TripRepo from '../src/trips-repo'
import Destination from '../src/destination'
import Trip from '../src/trip'
import destinationData from './destination-test-data';
import travelerData from './traveler-test-data';
import tripData from './trips-test-data';

describe('Traveler', function() {
  let traveler, travelerInfo, tripInfo;

  beforeEach(function() {
    travelerInfo = travelerData.travelers[2];

    traveler = new Traveler(travelerInfo);

    tripInfo = new TripRepo(tripData);
  });

  it('should be a function', function() {
    expect(Traveler).to.be.a('function');
  });

  it('should initialize with an id', function() {
    expect(traveler.id).to.eq(3);
  });

  it('should initialize with a name', function() {
    expect(traveler.name).to.eq('Sibby Dawidowitsch');
  });

  it('should store the traverler\'s type', function() {
    expect(traveler.travelerType).to.eq('shopper');
  });

  it('should start with a list of trips based on userID', function() {
    tripInfo.findTripsByID(traveler);
    expect(traveler.myTrips).to.deep.eq([
      {
        id: 3,
        userID: 3,
        destinationID: 1,
        travelers: 4,
        date: '2020/05/22',
        duration: 17,
        status: 'pending',
        suggestedActivities: []
      },
      {
        id: 7,
        userID: 3,
        destinationID: 17,
        travelers: 5,
        date: '2020/5/28',
        duration: 20,
        status: 'approved',
        suggestedActivities: []
      },
      {
        id: 9,
        userID: 3,
        destinationID: 17,
        travelers: 6,
        date: '2021/02/07',
        duration: 4,
        status: 'approved',
        suggestedActivities: []
      }
    ])
  });

  it('should be able to calculate how much the traveler spent on trips the previous year', function() {
    tripInfo.findTripsByID(traveler);
    expect(traveler.calcPrevYearSpending(destinationData.destinations)).to.eq(20168)
  });

  it('should be able to calculate how much the traveler spent on trips for the current year', function() {
    tripInfo.findTripsByID(traveler);
    expect(traveler.calcCurrentYearSpending(destinationData.destinations)).to.eq(5247)
  });

  it('should be able to return the trips that are pending', function() {
    tripInfo.findTripsByID(traveler);
    expect(traveler.getPendingTrips()).to.deep.eq([{
      "id": 3,
      "userID": 3,
      "destinationID": 1,
      "travelers": 4,
      "date": "2020/05/22",
      "duration": 17,
      "status": "pending",
      "suggestedActivities": []
    }])
  })
});
