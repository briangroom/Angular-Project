import { AngularSpringLabPage } from './app.po';

describe('angular-spring-lab App', () => {
  let page: AngularSpringLabPage;

  beforeEach(() => {
    page = new AngularSpringLabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
