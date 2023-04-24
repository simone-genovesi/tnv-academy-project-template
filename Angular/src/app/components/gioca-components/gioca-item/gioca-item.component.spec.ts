import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiocaItemComponent } from './gioca-item.component';

describe('GiocaItemComponent', () => {
  let component: GiocaItemComponent;
  let fixture: ComponentFixture<GiocaItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GiocaItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiocaItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
