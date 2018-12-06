import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';
declare var $: any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, AfterViewInit {
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

  goto(type) {
    if (type === 'login') {
      this.router.navigate(['/login']);      
    } else {
      this.router.navigate(['/register']);      
    }
  }

}
