import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlphabetRusComponent } from './alphabet-rus.component';

describe('AlphabetRusComponent', () => {
  let component: AlphabetRusComponent;
  let fixture: ComponentFixture<AlphabetRusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlphabetRusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlphabetRusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
