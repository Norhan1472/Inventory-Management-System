import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { History } from './history';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {
  baseLink = "http://localhost:8080/api/history/v1/";

  constructor(private http:HttpClient) { }

  getAllHistories():Observable<History[]>{
    return this.http.get<History[]>(`${this.baseLink}getAllHistories`).pipe(
      map(
        res=>{
          return res
        }
      )
    );
  }
  generatePdf():Observable<any>{
    return this.http.get<any>(`${this.baseLink}export-to-pdf`);
  }
}
