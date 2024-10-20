import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CodeRunnerService {
  private apiUrl = 'https://api.bpenchev.info/api/Execute/execute';
  constructor(private http: HttpClient) { }
  

  runCode(codePassed : string) : Observable<string> {
    const payload = {
      code : codePassed
    }
    return this.http.post(this.apiUrl, payload, {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'text' 
    });
  }
}
