import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingledistComponent } from './singledist.component';

describe('SingledistComponent', () => {
  let component: SingledistComponent;
  let fixture: ComponentFixture<SingledistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingledistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingledistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
