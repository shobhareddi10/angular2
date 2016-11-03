import {Component} from 'angular2/core';
import {CountryService} from './country.service'

@Component({
  selector: 'app-component',
  templateUrl: 'src/app.component.tpl.html',
  providers: [CountryService]
})
export class AppComponent {
    constructor(private _countryService: CountryService){
        this._countryService = _countryService;
    }
    
    getCountriesByRegion(){
	    console.log("Let's call getCountriesByRegion");
        this.error = "";
        this.countries = [];
        this._countryService.getCountriesByRegion(this.region)
         .subscribe(
            data => this.countries = data,
            error => this.error = error
			//err => this.logError(err)
         );

		 console.log("after getCountriesByRegion");
    }
}