import {Component, Input, Output, EventEmitter, ChangeDetectionStrategy} from 'angular2/core';
import {Course} from './courses';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';

//-------------------------------------------------------------------
// COURSE-LIST
//-------------------------------------------------------------------
@Component({
  selector: 'course-list',
  template: `
  <div *ngFor="#item of courses" (click)="selected.emit(item)"
    class="item-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text">{{item.number}} <small>{{item.name}}</small></h2>
    </div>
    <div class="mdl-card__supporting-text">
      <b>{{item.hours}}</b> hours - <b>{{item.credits}}</b> credits - Pass: {{item.passingGrade}} %
    </div>
    <div class="mdl-card__menu">
      <button (click)="deleted.emit(item); $event.stopPropagation();"
        class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
        <i class="material-icons">close</i>
      </button>
    </div>
  </div>
  `
})
export class CourseList {
  @Input() courses: Course[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}

//-------------------------------------------------------------------
// ITEM DETAIL
//-------------------------------------------------------------------
@Component({
  selector: 'course-detail',
  template: `
  <div class="item-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text" *ngIf="selectedItem.id">Editing {{originalName}}</h2>
      <h2 class="mdl-card__title-text" *ngIf="!selectedItem.id">Create New Item</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <form novalidate>
          <div class="mdl-textfield mdl-js-textfield">
            <label>Course Number</label>
            <input [(ngModel)]="selectedItem.number"
              placeholder="Enter a name"
              class="mdl-textfield__input" type="text">
          </div>

          <div class="mdl-textfield mdl-js-textfield">
            <label>Course Name</label>
            <input [(ngModel)]="selectedItem.name"
              placeholder="Enter a description"
              class="mdl-textfield__input" type="text">
          </div>

          <div class="mdl-textfield mdl-js-textfield">
            <label>Credits</label>
            <input [(ngModel)]="selectedItem.credits"
              placeholder="Enter a description"
              class="mdl-textfield__input" type="number">
          </div>

          <div class="mdl-textfield mdl-js-textfield">
            <label>Hours</label>
            <input [(ngModel)]="selectedItem.hours"
              placeholder="Enter a description"
              class="mdl-textfield__input" type="number">
          </div>

          <div class="mdl-textfield mdl-js-textfield">
            <label>Passing Grade</label>
            <input [(ngModel)]="selectedItem.passingGrade"
              placeholder="Enter a description"
              class="mdl-textfield__input" type="checkbox">
          </div>
      </form>
    </div>
    <div class="mdl-card__actions">
        <button type="submit" (click)="cancelled.emit(selectedItem)"
          class="mdl-button mdl-js-button mdl-js-ripple-effect">Cancel</button>
        <button type="submit" (click)="saved.emit(selectedItem)"
          class="mdl-button mdl-js-button mdl-button--colored mdl-js-ripple-effect">Save</button>
    </div>
  </div>
  `
})
export class CourseDetail {
  originalName: string;
  selectedItem: Course;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input('item') set _item(value: Course){
    if (value) this.originalName = value.name;
	  this.selectedItem = Object.assign({}, value);
  }
}

