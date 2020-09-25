import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetEngComponent } from './alphabet-eng.component';

describe('AlphabetEngComponent', () => {
  let component: AlphabetEngComponent;
  let fixture: ComponentFixture<AlphabetEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabetEngComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
