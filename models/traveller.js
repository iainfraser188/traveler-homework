const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
    const result = this.journeys.map((journey)=>{
    return journey.startLocation
     });
    return result; 
   };



Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey)=>{
    return journey.endLocation
     });
    return result; 
};

Traveller.prototype.getJourneysByTransport = function (transport) {
   const result = this.journeys.filter((journey)=>{
   return journey.transport === transport;
   });
   return result;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
   const result = this.journeys.filter((journey)=>{

   return journey.distance >= minDistance
  });
  return result;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const distances = this.journeys.map((journey)=>{
       return journey.distance
  });
    
  const result = distances.reduce((runningTotal,distance)=>{
      return runningTotal + distance;
  });
  return result;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  const result = this.journeys.map((journey)=>{
    return journey.transport
     });
     const uniqueresult = new Set(result);
     const uniqueresult1 = [...uniqueresult]

     return uniqueresult1;
      
  // const unique = result.filter(journey.transport)
  // return unique;
};


module.exports = Traveller;
