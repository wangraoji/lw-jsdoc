import { ZujianchuanzhiPage } from './app.po';

describe('zujianchuanzhi App', () => {
  let page: ZujianchuanzhiPage;

  beforeEach(() => {
    page = new ZujianchuanzhiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
