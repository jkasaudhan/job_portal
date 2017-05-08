import { JobPortalPage } from './app.po';

describe('job-portal App', () => {
  let page: JobPortalPage;

  beforeEach(() => {
    page = new JobPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
