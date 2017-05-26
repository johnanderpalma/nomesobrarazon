import { NomesobrarazonPage } from './app.po';

describe('nomesobrarazon App', function() {
  let page: NomesobrarazonPage;

  beforeEach(() => {
    page = new NomesobrarazonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
