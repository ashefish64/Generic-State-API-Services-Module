import { IModel } from "./i.model";

export interface IState<M extends IModel> {

  data: M[],
  new: M,
  selectedId: number | string | undefined,

}

export interface IRState<M extends IModel> extends IState<M> {

  edited: M[]
  
}
