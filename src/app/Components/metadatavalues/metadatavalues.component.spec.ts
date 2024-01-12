import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetadatavaluesComponent } from './metadatavalues.component';

describe('MetadatavaluesComponent', () => {
  let component: MetadatavaluesComponent;
  let fixture: ComponentFixture<MetadatavaluesComponent>; 

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetadatavaluesComponent]
    });
    fixture = TestBed.createComponent(MetadatavaluesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }); 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
