import { Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() menu: any = [];
  @Input() sessionLabel: string = '';
  @Output() endSession = new EventEmitter();
  @Output() menuChoice = new EventEmitter();
  @ViewChild('menubtn', { static: true }) menuBtn: ElementRef;
  @ViewChild('menucard', { static: true }) menucard: ElementRef;
  constructor(private renderer: Renderer2) {

    this.renderer.listen('window', 'click', (e: Event) => {
      const menuOpen = this.menuBtn.nativeElement.checked;
      if (!menuOpen) {
        return
      }
      if ((<HTMLElement>e.target).matches('a')) {
          console.log('a choice was made!');
          this.menuBtn.nativeElement.click();
      }

      if (e.target === this.menuBtn.nativeElement) {
        // I don't need to do anything, the css will take care of it
        console.log('the target was the button!');
      }

      if (!this.menucard.nativeElement.contains(e.target)) {
        // A click outside the menu, close the menu
        console.log('menu was not clicked!');
        this.menuBtn.nativeElement.click();
      }
    });
  }

  ngOnInit(): void {
  }

  onEndSession() {
    // console.log('hi from endSession');
    this.endSession.emit('true');
  }

  onMenuChoice(item) {
    // console.log('hi from menuChoice');
    this.menuChoice.emit(item);
  }

}
