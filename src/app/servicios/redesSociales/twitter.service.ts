import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tuit } from 'src/app/core/datos/dtosTwitter';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable()
export class TwitterService {

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
  }

  /**
   * 
   */
  obtenerTuits(concepto: string): Observable<any> {
    console.log('http://31.220.53.173:8080/gs-spring-boot-0.1.0/twitter/tuits/concepto/' + concepto);
    return this.http.get<any>('http://31.220.53.173:8080/gs-spring-boot-0.1.0/twitter/tuits/concepto/' + concepto).pipe(
      map(this.extractData));
  }

  /**
   * 
   */
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }
}
