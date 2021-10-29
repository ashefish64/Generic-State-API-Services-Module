import { HttpClient, HttpParams } from "@angular/common/http"
import { Observable } from "rxjs"
import { IDto } from "../models/i.dto"
import { IMapper } from "../models/i.mapper"
import { IModel } from "../models/i.model"
import { map } from "rxjs/operators"

export abstract class BasicApiBaseService<D extends IDto, M extends IModel, C extends IMapper<D, M>> {

    constructor(
      protected readonly _httpClient: HttpClient,
      protected readonly _url: string,
      protected readonly _httpOptions: { [key: string]: any },
      protected readonly _mapper: C
    ) { }
  
    public getAll(): Observable<M[]> {
      return this._httpClient.get<D[]>(this._url, this._httpOptions)
      .pipe(
        map((response: D[]) => {
          return this._mapper.toArrayModel(response)
        })
      )
    }
  
    public getById(id: number | string ): Observable<M> {
      const params = new HttpParams().set('id', id)
      return this._httpClient.get<D>(this._url, {...this._httpOptions, ...{params}})
      .pipe(
        map((response: D) => { return this._mapper.toModel(response)})
      )
    }
  
    public add(model: M): Observable<M> {
      return this._httpClient.post<D>(this._url, this._mapper.toDto(model), this._httpOptions)
      .pipe(
        map((response: D) => { return this._mapper.toModel(response)})
      )
    }
  
    public edit(model: M): Observable<string> {
      return this._httpClient.patch<D>(this._url, this._mapper.toDto(model), this._httpOptions)
      .pipe(
        map((response: D) => { return 'Edited Successfully!'})
      )
    }
  
    public delete(): Observable<string> {
      return this._httpClient.delete<D>(this._url, this._httpOptions)
      .pipe(
        map((response: D) => { return 'Deleted Successfully!'})
      )
    }
    
  }
  