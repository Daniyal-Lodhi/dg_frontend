import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDbConfigComponent } from './add-db-config.component';

describe('AddDbConfigComponent', () => {
  let component: AddDbConfigComponent;
  let fixture: ComponentFixture<AddDbConfigComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDbConfigComponent]
    });
    fixture = TestBed.createComponent(AddDbConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
