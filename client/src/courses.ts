export interface Course {
    id: number;
    number: string;
    name: string;
    credits: number;
    hours: number;
    passingGrade: number;
};

// COURSES STORE
export const courses = (state: any=[], {type, payload}) => {
    let index: number;
    switch (type) {
        case 'ADD_COURSES':
        case 'CREATE_COURSE':
        case 'UPDATE_COURSE':
        default:       
            return state;
    }
};

// SELECTED COURSE STORE
export const selectedCourse = (state: any = null, {type, payload}) => {
    switch(type) {
        case 'SELECT_COURSE':
            return payload;
        default:
            return state;
    }
};

// COURSES SERVICE
