import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgForDirComponent } from './ng-for-dir.component';

describe('NgForDirComponent', () => {
  let component: NgForDirComponent;
  let fixture: ComponentFixture<NgForDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgForDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgForDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
