import { IDto } from "./i.dto"
import { IModel } from "./i.model"

export abstract class IMapper<D extends IDto, M extends IModel> {

    constructor() {}

    public toDto(model: M): D {
        return { ...model } as unknown as D
    }

    public toModel(dto: D): M {
        return { ...dto } as unknown as M
    }

    public toArrayDto(models: M[]): D[] {
        return models.map((model: M) => { return this.toDto(model)})
    }

    public toArrayModel(dtos: D[]): M[] {
        return dtos.map((dto: D) => { return this.toModel(dto)})
    }

}