import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FineGiocaItemComponent } from './fine-gioca-item.component';

describe('FineGiocaItemComponent', () => {
  let component: FineGiocaItemComponent;
  let fixture: ComponentFixture<FineGiocaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FineGiocaItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FineGiocaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
