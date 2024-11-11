import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraphComponent } from './craph.component';

describe('CraphComponent', () => {
  let component: CraphComponent;
  let fixture: ComponentFixture<CraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
