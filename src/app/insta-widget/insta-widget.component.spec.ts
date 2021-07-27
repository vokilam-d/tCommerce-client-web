import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaWidgetComponent } from './insta-widget.component';

describe('InstaWidgetComponent', () => {
  let component: InstaWidgetComponent;
  let fixture: ComponentFixture<InstaWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstaWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
