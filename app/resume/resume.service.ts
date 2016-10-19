import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

import { Http, Response } from '@angular/http';
import { Resume } from './resume.model';

@Injectable()
export class ResumeService {

    private resumeUrl = 'app/resume/MVillalobosWorkHistory.json'

    constructor(private http:Http) {
    }

    findResume():Promise<Resume> {
        return this.http.get(this.resumeUrl)
            .toPromise()
            .then(response => response.json() as Resume)
            .catch(this.handleError);
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}