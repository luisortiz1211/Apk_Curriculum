import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { scrollInfinite } from './tab2.page';

describe('Tab2Page', () => {
  let component:scrollInfinite;
  let fixture: ComponentFixture<scrollInfinite>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [scrollInfinite],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(scrollInfinite);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
