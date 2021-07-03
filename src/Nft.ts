import INft from './INft'
class Nft implements INft
{
  name: string;
  description: string;
  image: string;
  collection: string;
  creator: string;

  constructor(name: string, description: string, image: string, collection: string, creator: string)
  {
    this.name = name;
    this.image = image;
    this.creator = creator;
    this.description = description;
    this.collection = collection;
  }

  display()
  {
  
  }

}

export default Nft;
