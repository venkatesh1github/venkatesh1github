import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//declare var $;
@Component({
  selector: 'app-smart-drop-down',
  templateUrl: './smart-drop-down.component.html',
  styleUrls: ['./smart-drop-down.component.scss']
})

export class SmartDropDownComponent implements OnInit {
  countries = [];
  fileredCountries=[];
  createAcess = false;
  selectedCountry: string;
  createNewCountry = false;
  showModal=false;
  loadMore=5;
  c1:any;

  
 
  constructor(private activatedRoute: ActivatedRoute) { }
  selected(cntry) {
    this.selectedCountry = cntry;
    //this.fileredCountries=this.countries.slice(0, 5);
  }
  manualSearch() {
    
   if(this.selectedCountry ){
    const items = this.countries.filter(item => item.toLowerCase() == this.selectedCountry.toLowerCase());
    if (items.length < 1 && this.createAcess) {
      this.createNewCountry = true;
      this.fileredCountries=[...this.countries];
    } else {
        // this.showModal=true;
       // $('.dropdown-toggle').dropdown();
        this.fileredCountries=[...items];
        
    }
   }else{
    this.fileredCountries=this.countries.slice(0, this.loadMore);
   }
  
  }
  getCntryData=()=>{
   let counter=0;
   return ()=>{
    console.log(counter + 'dat size'+this.countries.length)

    for(let i=counter+1;i<=this.countries.length;i++)
    {
      this.fileredCountries.push(this.countries[i-1]);
    if(i%this.loadMore==0) break;
    }
    counter+=this.loadMore;
   }
    
   // $('.dropdown-toggle').dropdown();

  }
  addCountry() {
    this.countries.push(this.selectedCountry);
    this.fileredCountries=[...this.countries];
    this.selectedCountry = "";
  }
  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.countries = <[]>data.cntryData;
      console.log( this.countries );
      this.createAcess = <boolean>data.createAcess;
      this.c1=  this.getCntryData();
     this.c1();
     
    });

    // this.countries =this.activatedRoute.snapshot['cntryData'];

  }

}
