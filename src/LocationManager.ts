import Location from './Location'
import INpc from './INpc'
import Npc from './Npc'
import Item from './Item'

class LocationManager
{
  locations: Location[];
  current: number = -1;

  enterLocation(id: number)
  {
    this.current = id;
  }

  exitLocation()
  {
    this.current = -1;
  }

  getCurrentLocation(): Location
  {
    if (this.current < 0)
      return null;
    return this.locations[this.current];
  }

  constructor(narrative: object)
  {
      this.locations = new Array();
      for (var i in narrative.locations) {
        var loc = narrative.locations[i];
        var npcs: INpc[] = new Array();
        var stuff: Item[] = new Array();
        
        for (var p in loc.people) {
          npcs.push(new Npc(loc.people[p].name, loc.people[p].image));
        }
  
        for (var s in loc.stuff) {
          stuff.push(new Item(loc.stuff[s].name, loc.stuff[s].image));
        }
  
        this.locations.push(new Location(loc.name, loc.image, npcs, stuff));
      }
      console.log(this.locations);
  }

  getAllLocations(): Location[]
  {
    return this.locations;
  }

}

export default LocationManager;
