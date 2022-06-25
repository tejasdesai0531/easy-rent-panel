import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAddonComponent } from './list-addon.component';

describe('ListAddonComponent', () => {
  let component: ListAddonComponent;
  let fixture: ComponentFixture<ListAddonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAddonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAddonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
