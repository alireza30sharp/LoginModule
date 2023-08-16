import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as _shareSvc from '@share/services';
@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  @Input() default:string;
  @Input() src:string;
  constructor(private readonly router: Router,
    private route: ActivatedRoute,
   ) { }

  ngOnInit() {
   
  }



}
