import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumImageListComponent } from './album-image-list.component';

describe('AlbumImageListComponent', () => {
  let component: AlbumImageListComponent;
  let fixture: ComponentFixture<AlbumImageListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumImageListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumImageListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
