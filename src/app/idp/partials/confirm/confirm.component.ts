import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as _shareSvc from '@share/services';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['app/home']);
    }, 2000);
  }
}
