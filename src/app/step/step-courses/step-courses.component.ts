import { Component, OnInit,ElementRef } from '@angular/core';
@Component({
  selector: 'app-step-courses',
  templateUrl: './step-courses.component.html',
  styleUrls: ['./step-courses.component.css']
})
export class StepCoursesComponent implements OnInit {


  courses =[
    {
     courseTitle:"Java",
     mode:"online",
     description:"dsdasdsad",
     duration:5,
     location:"Pune",
     start_date:23052012,
     vacany:10,
     job_offered:"yes"
   },
   {
     courseTitle:"Java",
     mode:"offline",
     description:"dsdasdsaddsfsdfdfsd", 
     duration:3,
     location:"Pune",
     start_date:23052012,
     vacancy:12
   }
 ];  

  btnTitle= "Register";
  // creg = document.getElementsByClassName('creg') as HTMLInputElement | null;
  constructor(private ElByClassName: ElementRef) { 
  }

// Use this code for accomodation 
  register(){
    const btnElement = (<HTMLElement>this.ElByClassName.nativeElement).querySelector(
      '.creg'
      );
    this.btnTitle="Disabled";
    btnElement?.setAttribute('disabled', '');
    // this.creg?.classList.remove('btn-primary');
  }
  ngOnInit(): void {
  }

}
