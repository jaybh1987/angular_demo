import { Component } from "@angular/core";

/** convert this in component. */
@Component({
    selector: 'courses',  //<courses> , 
    template: `
        <h2>{{ displayList() }}</h2>
        <ul>
            <li *ngFor="let c of courses">
                {{ c }}
            </li>
        </ul>

        `
}) 
export class CoursesComponent{

    title = "List of Courses."

    courses = ['c1', 'c2', 'c3']


    

    getTitle() {
        return this.title
    }

    displayList() {
        return [1,2,3,4].map( r => r + 1)
    }
}