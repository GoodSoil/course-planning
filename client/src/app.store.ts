import {ItemsService, Item} from './items';
import {Course} from './courses';

export interface AppStore {
  items: Item[];
  selectedItem: Item;
  courses: Course[];
  selectedCourse: Course;
};
