import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectDatabasesComponent } from './select-databases.component';

describe('SelectDatabasesComponent', () => {
  let component: SelectDatabasesComponent;
  let fixture: ComponentFixture<SelectDatabasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectDatabasesComponent]
    });
    fixture = TestBed.createComponent(SelectDatabasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
