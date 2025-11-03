import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDynComponent } from './app-dyn-component';

describe('AppDynComponent', () => {
  let component: AppDynComponent;
  let fixture: ComponentFixture<AppDynComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppDynComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDynComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
