import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'insta-widget',
  templateUrl: './insta-widget.component.html',
  styleUrls: ['./insta-widget.component.scss']
})
export class InstaWidgetComponent implements OnInit {
  @ViewChild('post') post: ElementRef;
  @ViewChild('modal') modal: ElementRef;


  constructor() { }

  ngOnInit(): void { }

  public isPostModalVisible(event) {
    if (event.type === 'mouseover') {
      this.modal.nativeElement.classList.add('post__modal--isVisible');
    } else {
      this.modal.nativeElement.classList.remove('post__modal--isVisible');
    }
  }
}
