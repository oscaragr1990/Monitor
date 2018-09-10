import { environment } from '../../app/env/env';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/Operators';

@Injectable()
export class HttpService  {

  private static readonly url_servicios: string = environment.url_servicios;

  constructor(private http: HttpClient) { }

  /**
   * Método HTTP GET sobreescrito para controlar el ciclo de vida del llamado.
   * 
   * @template T 
   * @param {string} endpoint 
   * @param {boolean} [conCredenciales] 
   * @returns {Observable<T>} 
   * @memberof HttpService
   */
  metodoGet<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(this.getFullUrl(endpoint), { withCredentials: true })
      .pipe(
      catchError(this.onCatch),
      finalize(() => { this.onEnd(); })
      );
  }

  /**
   * Método privado para construir la URL completa del llamado.
   * 
   * @private
   * @param {string} endpoint 
   * @returns {string} 
   * @memberof HttpService
   */
  private getFullUrl(endpoint: string): string {
    let fullUrl = null;
    if (!HttpService.url_servicios.endsWith("/")) {
      fullUrl = HttpService.url_servicios.concat("/");
    }
    if (endpoint.startsWith("/")) {
      fullUrl = fullUrl + endpoint.substring(1);
    } else {
      fullUrl = fullUrl + endpoint;
    }
    return fullUrl;
  }

  /**
   * Método encargado de capturar y relanzar cualquier error resultante de una falla en el llamado HTTP.
   * 
   * @private
   * @param {*} error 
   * @param {Observable<any>} caught 
   * @returns {Observable<any>} 
   * @memberof HttpService
   */
  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    return Observable.throw(error);
  }

  /**
   * Método que contiene las operaciones de finalización de los llamados HTTP.
   * 
   * @private
   * @memberof HttpService
   */
  private onEnd(): void {

  }

}
