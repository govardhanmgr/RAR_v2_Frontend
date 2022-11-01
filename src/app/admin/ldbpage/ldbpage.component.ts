import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Papa } from 'ngx-papaparse';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-ldbpage',
  templateUrl: './ldbpage.component.html',
  styleUrls: ['./ldbpage.component.css']
})
export class LdbpageComponent implements OnInit {
  ldb ={} as any || null ;
  fileName = '';
  // event!:any;
  filename!:string;
  // validate_message!:string;
  // content= [];
  // file!:null
  // Subscribe!:Subscribe;
  
  
  


  constructor(private http: HttpClient) { }
//   onFileSelected(event: { target: { files: File[]; }; }) {

//     const file:File = event.target.files[0];

//     if (file) {

//         this.fileName = file.name;

//         const formData = new FormData();

//         formData.append("thumbnail", file);

//         const upload$ = this.http.post("/api/thumbnail-upload", formData);

//         upload$.subscribe();
//     }


// }

  ngOnInit(): void {
  }
  // load(f:NgForm,event: { target: { files: null[]; }; }){
  //   this.file = event.target.files[0]
  //   this.file = event.target.files[0];
  //   this.parseFile();





    
  //  console.log(this.filename)
  //  if(!this.filename &&  !this.content.data){
  //   this.validate_message="Please Select File Name  and choose file";
  
  // }
  //  else if(!this.filename){
  //   this.validate_message="Please Select File Name";
  // }
  // else if(!this.content.data){
  // this.validate_message="Choose File ";
  // }
  // else if(this.filename &&  this.content.data.length > 0){
  //   this.submitUpdates()
  // }



  
//   parseFile() {
//     // throw new Error('Method not implemented.');
//     Papa.parse( this.file, {
//       header: true,
//       skipEmptyLines: true,
//       complete: function( results ){
//           this.content = results;
//           console.log(this.content.data)
//           this.parsed = true;
//       }.bind(this)
//   } );
// }
  load(F:NgForm){}

onFileSelected(event:any) {

  const file:File = event.target.files();

  if (file) {

      this.fileName = file.name;

      const formData = new FormData();

      formData.append("fileupload", file);

      // const upload$ = this.http.post("fileupload", formData);

      // upload$.subscribe();
  }
}
  
}
