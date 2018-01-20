import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsfFooterComponent } from './tsf-footer.component';

describe('TsfFooterComponent', () => {
  let component: TsfFooterComponent;
  let fixture: ComponentFixture<TsfFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsfFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsfFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
