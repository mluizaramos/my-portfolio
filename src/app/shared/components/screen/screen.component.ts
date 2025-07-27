// shared/screen.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ScreenService {

  constructor() {
    this.emitCurrentSize(); 
    window.addEventListener('resize', () => {
      this.emitCurrentSize();
    });
  }

  private emitCurrentSize() {
    const currentValue = this.checkIsMobile();
    if (this.isMobileSubject.value !== currentValue) {
      this.isMobileSubject.next(currentValue);
    }
  }

  private isMobileSubject = new BehaviorSubject<boolean>(this.checkIsMobile());
  isMobile$ = this.isMobileSubject.asObservable();

  private checkIsMobile(): boolean {
    return window.innerWidth <= 768;
  }

  get isMobile(): boolean {
    return this.isMobileSubject.value;
  }
}
