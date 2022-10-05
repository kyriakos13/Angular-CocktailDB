import { AngularDrinksPage } from './app.po';

describe('angular-drinks App', () => {
  let page: AngularDrinksPage;

  beforeEach(() => {
    page = new AngularDrinksPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
