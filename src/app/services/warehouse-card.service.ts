import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class WarehouseCardService {

  API_URL: string = 'http://localhost:3000/'
  constructor(private httpClient: HttpClient) { }

  getList(): Promise<any> {
    return this.httpClient.get(`${this.API_URL}/warehouses`)
    .toPromise()
    .then((res: Response) => res.json());
  }
}
