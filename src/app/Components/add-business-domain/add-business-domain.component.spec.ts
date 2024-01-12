import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusinessDomainComponent } from './add-business-domain.component';

describe('AddBusinessDomainComponent', () => {
  let component: AddBusinessDomainComponent;
  let fixture: ComponentFixture<AddBusinessDomainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBusinessDomainComponent]
    });
    fixture = TestBed.createComponent(AddBusinessDomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
