import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

export interface State {
    name: string;
    abbreviation: string;
  }

export interface Data {
    name: any,
    email: any,
    password: any,
    occupation: any[],
    state: State[]
  
  }

@Injectable()
export class IntakeFormDataService {

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(private _httpClient: HttpClient) {
        // Set the defaults
        }


    getFetchData() {
        return this._httpClient.get('https://frontend-take-home.fetchrewards.com/form');
    }

    submitFetchData(name: string, email: string, password: string, occupation: string, state: string) : Observable<any>{
        let submit = {
            "name": name,
            "email": email,
            "password": password,
            "occupation": occupation,
            "state": state
          };

        return this._httpClient.post('https://frontend-take-home.fetchrewards.com/form',submit);
    
    }






}
