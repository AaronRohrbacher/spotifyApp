export class Party {
  constructor (
    public name: string,
    public date: string,
    public location: string,
    public danceability: string,
    public playlist: object[] = []
  ) {}
}
