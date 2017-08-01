export class Bug{
    constructor(
        public id: string,
        public title: string,
        public status: number,
        public severity: number,
        public description: string,
        public createdBy: string,
        public createdDate: number,
        //  note the question mark: this makes the var optional
        public updatedBy?: string,
        public updatedDate?: number
    ){}
}