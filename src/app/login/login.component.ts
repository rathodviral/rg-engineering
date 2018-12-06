import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      $(document).ready(function(){
        $("#mobile-number").intlTelInput();
      });
    }, 2000);
  }
}
