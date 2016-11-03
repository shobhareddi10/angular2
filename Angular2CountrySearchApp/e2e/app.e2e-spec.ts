import { CountryselectPage } from './app.po';

describe('countryselect App', function() {
  let page: CountryselectPage;

  beforeEach(() => {
    page = new CountryselectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
