import { MvillalobosWebsitePage } from './app.po';

describe('mvillalobos-website App', function() {
  let page: MvillalobosWebsitePage;

  beforeEach(() => {
    page = new MvillalobosWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
