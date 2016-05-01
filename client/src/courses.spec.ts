import {courses, selectedCourse} from './courses';

import {
    it, describe, expect
} from 'angular2/testing';

describe('Courses', () => {
    describe('`selectedCourse` store', () => {
        it('return null be default', () => {
            let defaultState = selectedCourse(undefined, {type: 'random', payload: {}});
            expect(defaultState).toBeNull();
        });
        
    })
});


