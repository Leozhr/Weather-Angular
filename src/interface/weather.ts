export class WeatherList {
  constructor(
    public cityName: string,
    public temp: string,
    public type: string,
    public tempMin: string,
    public tempMax: string,
    public img: string
  ) {}
}
