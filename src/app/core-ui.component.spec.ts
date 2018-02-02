import {
  inject
} from '@angular/core/testing';
import { CoreUIAppComponent } from '../app/core-ui.component';

describe('App: CoreUI', () => {
  it('should create the app',
      inject([CoreUIAppComponent], (app: CoreUIAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'core-ui works!\'',
      inject([CoreUIAppComponent], (app: CoreUIAppComponent) => {
    expect(app.title).toEqual('core-ui works!');
  }));
});
