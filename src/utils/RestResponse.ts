export class RestResponse<T> {
    private data:T;
    private errors:string[];

    constructor(data:T, errors:[]) {
        this.data = data;
        this.errors = errors;
    }
}