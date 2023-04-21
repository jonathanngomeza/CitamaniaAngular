import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasDeMultiplicarComponent } from './tablas-de-multiplicar.component';

describe('TablasDeMultiplicarComponent', () => {
  let component: TablasDeMultiplicarComponent;
  let fixture: ComponentFixture<TablasDeMultiplicarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablasDeMultiplicarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablasDeMultiplicarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
