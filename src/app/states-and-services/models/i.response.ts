import { IDto } from "./i.dto";

export interface IResponse<D extends IDto> {

    data: D[]
    message: string
    errors: Error[]
    
}