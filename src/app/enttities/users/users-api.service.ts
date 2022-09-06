import { Inject, Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "./users.interface";

//todo: ask  it should be provided only in Users module, and which one?

@Injectable()
export class UsersApiService {

  constructor( private http: HttpClient, @Inject('API_BASE') private apiBase: string) { }

  loadUsers(params?: object): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiBase}/users`);
  }
}
