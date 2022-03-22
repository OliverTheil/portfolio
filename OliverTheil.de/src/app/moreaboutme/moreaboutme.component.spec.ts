import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreaboutmeComponent } from './moreaboutme.component';

describe('MoreaboutmeComponent', () => {
  let component: MoreaboutmeComponent;
  let fixture: ComponentFixture<MoreaboutmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreaboutmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreaboutmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
