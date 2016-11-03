import {Injectable} from "angular2/core"
import {Http} from 'angular2/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class CountryService{

   endpoint_url:String = "https://restcountries.eu/rest/v1/region/";
         constructor(http: Http){
        this.http = http;
    }
    //console.log("Let's call url");
	getCountriesByRegion (region:String){
	    console.log("Let's call url");
        return this.http.get(this.endpoint_url+region)
		                .map(res => res.json())
						.do(data => console.log(data))
                        .catch(this.handleError);
 
    }
	
	private handleError (error: Response) {
	console.log('handleError');
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }
}