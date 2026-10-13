import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navbar } from './navbar';

describe('Navbar', () => {
  let component: Navbar;
  let fixture: ComponentFixture<Navbar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navbar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navbar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show all RxJS routes in the dropdown', () => {
    const toggle = fixture.nativeElement.querySelector('button.dropdown-toggle') as HTMLButtonElement;
    toggle.click();
    fixture.detectChanges();

    expect(toggle.getAttribute('aria-expanded')).toBe('true');
    expect(Array.from(fixture.nativeElement.querySelectorAll<HTMLAnchorElement>('.dropdown-item'))
      .map((link) => link.textContent.trim()))
      .toEqual(['forkJoin', 'switchMap', 'mergeMap', 'concatMap', 'exhaustMap']);
  });
});
