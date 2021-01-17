import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumStartComponent } from './album-start.component';

describe('AlbumStartComponent', () => {
  let component: AlbumStartComponent;
  let fixture: ComponentFixture<AlbumStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
