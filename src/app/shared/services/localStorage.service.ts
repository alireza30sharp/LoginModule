import { Injectable } from '@angular/core';
import * as _shareMls from '@share/models';

@Injectable({ providedIn: "root" })
export class LocalStorageService
{

    set(key: _shareMls.localStorageEnum, value: any)
    {
        localStorage.setItem(key, JSON.stringify(value));
    }

    get<T>(key: _shareMls.localStorageEnum)
    {
        return JSON.parse(localStorage.getItem(key)) as T;
    }

    delete(key: _shareMls.localStorageEnum)
    {
        localStorage.removeItem(key);
    }

    clearAll()
    {
        localStorage.clear();
    }


}