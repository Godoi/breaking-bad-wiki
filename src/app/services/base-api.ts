export abstract class BaseApi {
  private urlsMap = new Map([
    [
      'localhost',
      {
        us: '',
        br: ''
      }
    ]
  ]);

  constructor(private path: string = 'api/') {}

  get API_URL() {
    const hostname = window.location.hostname;

    const urlbase = this.urlsMap.get(hostname);
    return `${urlbase.br}/${this.path}`;
  }
}
