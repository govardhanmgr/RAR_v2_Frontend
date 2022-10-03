import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveemplydataComponent } from './activeemplydata.component';

describe('ActiveemplydataComponent', () => {
  let component: ActiveemplydataComponent;
  let fixture: ComponentFixture<ActiveemplydataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActiveemplydataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveemplydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
