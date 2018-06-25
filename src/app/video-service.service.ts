
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class VideoServiceService {

private _postsURL1 = 'assets/mock-data/CONTENTLISTINGPAGE-PAGE1.json';
private _postsURL2 = 'assets/mock-data/CONTENTLISTINGPAGE-PAGE2.json';
private _postsURL3 = 'assets/mock-data/CONTENTLISTINGPAGE-PAGE3.json';

    constructor(private http: Http) { }
getVideoList(pageNo): Observable<any> {
        if (pageNo === 1) {
            return this.http
                .get(this._postsURL1)
                .map((response: Response) => {
                    return response.json();
                })
                .catch(this.handleError);
        } else if (pageNo === 2) {
            return this.http
                .get(this._postsURL2)
                .map((response: Response) => {
                    return response.json();
                })
                .catch(this.handleError);
        } else if (pageNo === 3) {
            return this.http
                .get(this._postsURL3)
                .map((response: Response) => {
                    return response.json();
                })
                .catch(this.handleError);
        }
    }


    private handleError(error: Response) {
        return Observable.throw(error.statusText);
    }
}


