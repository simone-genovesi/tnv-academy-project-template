import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineGiocaComponent } from './fine-gioca.component';

describe('FineGiocaComponent', () => {
  let component: FineGiocaComponent;
  let fixture: ComponentFixture<FineGiocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FineGiocaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FineGiocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
