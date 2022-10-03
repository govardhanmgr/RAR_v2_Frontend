import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenrequestComponent } from './penrequest.component';

describe('PenrequestComponent', () => {
  let component: PenrequestComponent;
  let fixture: ComponentFixture<PenrequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PenrequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PenrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
