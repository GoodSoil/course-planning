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
class CourseList {
  @Input() courses: Course[];
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();
}

//-------------------------------------------------------------------
// ITEM DETAIL
//-------------------------------------------------------------------
@Component({
  selector: 'course_detail',
  template: `
  <div class="item-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title">
      <h2 class="mdl-card__title-text" *ngIf="selectedItem.id">Editing {{originalName}}</h2>
      <h2 class="mdl-card__title-text" *ngIf="!selectedItem.id">Create New Item</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <form novalidate>
          <div class="mdl-textfield mdl-js-textfield">
            <label>Item Name</label>
            <input [(ngModel)]="selectedItem.name"
              placeholder="Enter a name"
              class="mdl-textfield__input" type="text">
          </div>

          <div class="mdl-textfield mdl-js-textfield">
            <label>Item Description</label>
            <input [(ngModel)]="selectedItem.description"
              placeholder="Enter a description"
              class="mdl-textfield__input" type="text">
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
class ItemDetail {
  @Input('item') _item: Item;
  originalName: string;
  selectedItem: Item;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  set _item(value: Item){
    if (value) this.originalName = value.name;
	  this.selectedItem = Object.assign({}, value);
  }
}

