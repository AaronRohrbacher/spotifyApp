import { SpotifyAppPage } from './app.po';

describe('spotify-app App', () => {
  let page: SpotifyAppPage;

  beforeEach(() => {
    page = new SpotifyAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
