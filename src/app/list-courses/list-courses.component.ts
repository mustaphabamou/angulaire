import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.css']
})
export class ListCoursesComponent {

  myCourse: string='Learn angular';
  courses: string[]=['angular' , 'spring' , 'laravel'];

    addCourse(){
    this.courses.unshift(this.myCourse);
    this.myCourse= "";
  }
}
