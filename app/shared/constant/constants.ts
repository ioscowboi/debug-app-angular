// create enum for numeric display items:
//     this is great for use in a pipe in the way that it will interpolate valules:
export enum STATUS {
    // simply define the value of the first and it'll auto assign the rest:
    'Logged' = 1,
    'Recreated',
    'In Progress',
    'Fixed',
    'Declined'
}
export enum SEVERITY {
    // simply define the value of the first and it'll auto assign the rest:
    'Severe' = 1,
    'Medium',
    'Low',
    'Cosmetic'
}