import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuitComponent } from './tuit.component';

describe('TuitComponent', () => {
  let component: TuitComponent;
  let fixture: ComponentFixture<TuitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
