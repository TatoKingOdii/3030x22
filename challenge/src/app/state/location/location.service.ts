import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Loc} from "../../types/loc";
import {Endpoint, ENDPOINT_BASE, EndpointPaths} from "../../types/endpoint";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private httpClient: HttpClient) { }

  loadContent(): Observable<Loc[]> {
    return this.httpClient.get<Loc[]>(ENDPOINT_BASE + EndpointPaths.get(Endpoint.LOCATIONS));
  }

  createContent(content: Loc): Observable<any> {
    return this.httpClient.post(`${ENDPOINT_BASE}${EndpointPaths.get(Endpoint.LOCATIONS)}`, content);
  }

  updateContent(content: Loc): Observable<any> {
    return this.httpClient.put(`${ENDPOINT_BASE}${EndpointPaths.get(Endpoint.LOCATIONS)}/${content.id}`, content)
  }

  deleteContent(content: Loc): Observable<any> {
    return this.httpClient.delete(`${ENDPOINT_BASE}${EndpointPaths.get(Endpoint.LOCATIONS)}/${content.id}`)
  }
}
