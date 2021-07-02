import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { SignaturePad } from 'angular2-signaturepad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('menubtn', { static: true }) menuBtn: ElementRef;
  @ViewChild('wholemenu', { static: true }) wholemenu: ElementRef;
  @ViewChild('wrapper', { read: ElementRef, static: false }) wrapper: ElementRef;

  @ViewChild(SignaturePad, { static: false }) signaturePad: SignaturePad;
  title = 'sign-app';
  bigMenu = true;
  smallScreen = false;
  checkBoxEl;
  showPad = false;
  signaturePadOptions: Object = { // passed through to szimek/signature_pad constructor
    'minWidth': 5,
    'canvasWidth': 500,
    'canvasHeight': 300,
    'throttle': 5
  };

  menu = [
    { "url": "/home", "text": { "value": "Home", "translations": {} } },
    {
      "url": "https://democracylive.com/",
      "text": { "value": "Contact", "translations": {} }
    },
    { "url": "/about", "text": { "value": "About", "translations": {} } },
  ];

  constructor(private elRef: ElementRef,
              private renderer: Renderer2,
              private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver
      .observe(['(min-width: 700px)'])
      .subscribe((state: BreakpointState) => {
        this.smallScreen = !state.matches;
      });

    // this.checkBoxEl = this.menuBtn.nativeElement;
    this.renderer.listen('window', 'click', (e: Event) => {
      if (e.target === this.menuBtn.nativeElement) {
        console.log('this is the input');
        this.menuBtn.nativeElement.click();
      }
      if (e.target !== this.menuBtn.nativeElement && e.target !== this.wholemenu.nativeElement) {
        this.menuBtn.nativeElement.click();
      }
      });
    }

  ngOnInit() {

  }

  ngAfterViewInit() {
    // this.signaturePad is now available
      console.log('hi from afterviewinit');
      this.updateDisplay();

    // this.signaturePad.set('minWidth', 5); // set szimek/signature_pad options at runtime
    // this.signaturePad.clear(); // invoke functions from szimek/signature_pad API
  }

  togglePad() {
    this.showPad = !this.showPad;
    if (this.showPad) {
      // Add the setTimeout to see it fail
      // setTimeout(() => {
        this.updateDisplay();
      // })

    }
  }

  closeMenuButton() {
    this.checkBoxEl.click();
  }

  toggleMenuButton() {
    console.log('menu toggled! ');
    this.bigMenu = !this.bigMenu;
    if (!this.bigMenu) {
      setTimeout(() => {
        // this.checkBoxEl = this.checkbox.nativeElement;
      }, 100)
    }
  }

  drawComplete() {
    // will be notified of szimek/signature_pad's onEnd event
    console.log(this.signaturePad.toDataURL());
    const isEmpty = this.signaturePad.isEmpty();
    if (isEmpty) {
      console.log('isEmpty is true');
    }
  }

  drawStart() {
    // will be notified of szimek/signature_pad's onBegin event
    console.log('begin drawing');
  }

  updateDisplay() {
    if (this.showPad && this.wrapper) {

      const width = this.wrapper.nativeElement.offsetWidth;
      let height = this.wrapper.nativeElement.offsetHeight;

      if (height > window.innerHeight) {
        height = window.innerHeight;
      }

      this.signaturePad.set('canvasWidth', width);
      this.signaturePad.set('canvasHeight', height);

      this.signaturePad.resizeCanvas();

    }
  }


}
