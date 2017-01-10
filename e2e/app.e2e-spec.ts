import { QchecklistPage } from './app.po';

describe('qchecklist App', function() {
  let page: QchecklistPage;

  beforeEach(() => {
    page = new QchecklistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
