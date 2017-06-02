import { AngularCoursePage } from './app.po';

describe('angular-course App', () => {
  let page: AngularCoursePage;

  beforeEach(() => {
    page = new AngularCoursePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
