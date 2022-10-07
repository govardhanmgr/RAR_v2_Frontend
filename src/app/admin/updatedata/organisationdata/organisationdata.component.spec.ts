import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationdataComponent } from './organisationdata.component';

describe('OrganisationdataComponent', () => {
  let component: OrganisationdataComponent;
  let fixture: ComponentFixture<OrganisationdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganisationdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
