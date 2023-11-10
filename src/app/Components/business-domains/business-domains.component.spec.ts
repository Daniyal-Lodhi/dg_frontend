import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDomainsComponent } from './business-domains.component';

describe('BusinessDomainsComponent', () => {
  let component: BusinessDomainsComponent;
  let fixture: ComponentFixture<BusinessDomainsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessDomainsComponent]
    });
    fixture = TestBed.createComponent(BusinessDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
