import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { skeleton } from './tab3.page';

describe('skeleton', () => {
  let component: skeleton;
  let fixture: ComponentFixture<skeleton>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [skeleton],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(skeleton);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
