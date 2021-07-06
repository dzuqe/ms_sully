import INpc from './INpc'
class Npc implements INpc
{
  avatar: string = "";
  name: string;
  location: number;

  getAvatar(): string
  {
    return "yeet";
  }

}

export default Npc;
