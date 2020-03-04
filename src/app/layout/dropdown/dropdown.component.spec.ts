import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownComponent } from './dropdown.component';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getAllCharacters', () => {
    it('should emit on click', () => {
      spyOn(component.getAll, 'emit');
      const nativeElement = fixture.nativeElement;
      const button = nativeElement.querySelectorAll('button.dropdown-item');

      button[0].dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(component.getAll.emit).toHaveBeenCalled();
    });
  });

  describe('getLimitCharacters', () => {
    it('should emit on click', () => {
      spyOn(component.getLimit, 'emit');
      const nativeElement = fixture.nativeElement;
      const button = nativeElement.querySelectorAll('button.dropdown-item');

      button[1].dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(component.getLimit.emit).toHaveBeenCalled();
    });
    it('should receive the parameter with value 9', () => {
      spyOn(component.getLimit, 'emit');
      const nativeElement = fixture.nativeElement;
      const button = nativeElement.querySelectorAll('button.dropdown-item');

      button[1].dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(component.getLimit.emit).toHaveBeenCalledWith(9);
    });
    it('should receive the parameter with value 15', () => {
      spyOn(component.getLimit, 'emit');
      const nativeElement = fixture.nativeElement;
      const button = nativeElement.querySelectorAll('button.dropdown-item');

      button[2].dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(component.getLimit.emit).toHaveBeenCalledWith(15);
    });
    it('should receive the parameter with value 21', () => {
      spyOn(component.getLimit, 'emit');
      const nativeElement = fixture.nativeElement;
      const button = nativeElement.querySelectorAll('button.dropdown-item');

      button[3].dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(component.getLimit.emit).toHaveBeenCalledWith(21);
    });
    it('should receive the parameter with value 27', () => {
      spyOn(component.getLimit, 'emit');
      const nativeElement = fixture.nativeElement;
      const button = nativeElement.querySelectorAll('button.dropdown-item');

      button[4].dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(component.getLimit.emit).toHaveBeenCalledWith(27);
    });
    it('should receive the parameter with value 33', () => {
      spyOn(component.getLimit, 'emit');
      const nativeElement = fixture.nativeElement;
      const button = nativeElement.querySelectorAll('button.dropdown-item');

      button[5].dispatchEvent(new Event('click'));
      fixture.detectChanges();
      expect(component.getLimit.emit).toHaveBeenCalledWith(33);
    });
  });
});
