export enum Term {Jan, May, Sep};
export interface Offering {
    term: Term;
    year: number;
    sections: string[];
};

// OFFERINGS STORE
export const Offerings = (state: any=[], {type, payload}) => {
    let index: number;
    switch (type) {
        case 'ADD_OFFERINGS':
        case 'CREATE_OFFERING':
        case 'UPDATE_OFFERING':
        default:       
            return state;
    }
};

// SELECTED OFFERING STORE
export const selectedOffering = (state: any = null, {type, payload}) => {
    switch(type) {
        case 'SELECT_OFFERING':
            return payload;
        default:
            return state;
    }
};

// OFFERINGS SERVICE
