import { BehaviorSubject, Observable } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";
import { IDto } from "../models/i.dto";
import { IMapper } from "../models/i.mapper";
import { IModel } from "../models/i.model";
import { IState } from "../models/i.state.model";
import { BasicApiBaseService } from "../services/basic.api.service";


export abstract class BasicStateService<
    M extends IModel,
    D extends IDto,
    C extends IMapper<D, M>,
    A extends BasicApiBaseService<D, M, C>,
    S extends IState<M>>
{

    private _state$: BehaviorSubject<S> = new BehaviorSubject<S>({} as S);

    protected get _state(): S {
        return this._state$.getValue();
    }
    protected set _state(v: Partial<S>) {
        this._state$.next({
            ...this._state,
            ...v
        })
    }

    protected _select<M>(mapFn: (state: S) => M): Observable<M> {
        return this._state$.asObservable().pipe(
            map((state: S) => mapFn(state)),
            distinctUntilChanged()
        );
    }

    protected _selectMultiple<M>(mapFn: (state: S) => M[]): Observable<M[]> {
        return this._state$.asObservable().pipe(
            map((state: S) => mapFn(state)),
            distinctUntilChanged()
        );
    }

    protected _load() {
        this._apiService.getAll()
            .subscribe((response: M[]) => {
                this._state = {
                    ...this._state,
                    ...{ data: response }
                }
            })
    }

    private _selectById = ((state: S): M => {
        if (state.selectedId == undefined) {
            return state.new
        }
        else {
            for (let i = 0; i < state.data.length; i++) {
                if (state.data[i].id === state.selectedId) {
                    return state.data[i]
                }
            }
            throw Error('Object withn the selected ID does not exist!')
        }
    })

    private _selectAll = ((state: S): M[] => {
        return state.data
    })

    public set selected(id: number | string | undefined) {
        this._state = {
            ...this._state,
            ...{ selectedId: id }
        }
    }


    constructor(
        protected readonly _apiService: A
    ) { 
        this._load()
    }

    public allObjects$: Observable<M[]> = this._selectMultiple(this._selectAll)
    public selectedObject$: Observable<M> = this._select(this._selectById)

    public add() {
        this._apiService.add(this._state.new)
            .subscribe((model: M) => {
                this._state = {
                    ...this._state,
                    ...{
                        data: [...this._state.data, model],
                        selectedId: model.id
                    }
                }
            })
    }

    public edit() {
        this.selectedObject$
            .subscribe((model: M) => {
                this._apiService.edit(model)
                    .subscribe((response: string) => { })
            })
    }

}
