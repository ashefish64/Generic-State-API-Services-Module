import { HttpClient, HttpParams } from "@angular/common/http"
import { Observable } from "rxjs"
import { IDto } from "../models/i.dto"
import { IMapper } from "../models/i.mapper"
import { IModel } from "../models/i.model"
import { map } from "rxjs/operators"
import { IResponse } from "../models/i.response"

export abstract class BasicResponseApiBaseService<D extends IDto, M extends IModel, R extends IResponse<D>, C extends IMapper<D, M>> {

    constructor(
      protected readonly _httpClient: HttpClient,
      protected readonly _url: string,
      protected readonly _httpOptions: { [key: string]: any },
      protected readonly _mapper: C
    ) { }
  
    public getAll(): Observable<M[]> {
      return this._httpClient.get<R>(this._url, this._httpOptions)
      .pipe(
        map((response: R) => { return this._mapper.toArrayModel(response.data)})
      )
    }
  
    public getById(id: number | string ): Observable<M> {
      const params = new HttpParams().set('id', id)
      return this._httpClient.get<R>(this._url, {...this._httpOptions, ...{params}})
      .pipe(
        map((response: R) => { return this._mapper.toModel(response.data[0])})
      )
    }
  
    public add(model: M): Observable<M> {
      return this._httpClient.post<R>(this._url, this._mapper.toDto(model), this._httpOptions)
      .pipe(
        map((response: R) => { return this._mapper.toModel(response.data[0])})
      )
    }
  
    public edit(model: M): Observable<string> {
      return this._httpClient.patch<R>(this._url, this._mapper.toDto(model), this._httpOptions)
      .pipe(
        map((response: R) => { return response.message })
      )
    }
  
    public delete(): Observable<string> {
      return this._httpClient.delete<R>(this._url, this._httpOptions)
      .pipe(
        map((response: R) => { return response.message })
      )
    }
    
  }
  