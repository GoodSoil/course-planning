export interface evaluation {
    name: string;
    description: string;
    weight: number;
    requiredPass: boolean;
};

// EVALUATIONS STORE
export const evaluations = (state: any=[], {type, payload}) => {
    let index: number;
    switch (type) {
        case 'ADD_EVALUATIONS':
        case 'CREATE_EVALUATION':
        case 'UPDATE_EVALUATION':
        default:       
            return state;
    }
};

// SELECTED EVALUATION STORE
export const selectedEvaluation = (state: any = null, {type, payload}) => {
    switch(type) {
        case 'SELECT_EVALUATION':
            return payload;
        default:
            return state;
    }
};

// EVALUATIONS SERVICE
