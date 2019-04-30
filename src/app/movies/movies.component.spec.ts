import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';
import { MoviePresentationComponent } from '../movie-presentation/movie-presentation.component';

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesComponent, MoviePresentationComponent ]
    })
    .overrideComponent(MoviesComponent, { set: { providers: [ {provide: DataService, useClass: MockDataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
