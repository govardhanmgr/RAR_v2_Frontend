import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
// import { Papa } from 'ngx-papaparse';
// import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-ldbpage',
  templateUrl: './ldbpage.component.html',
  styleUrls: ['./ldbpage.component.css']
})
export class LdbpageComponent implements OnInit {
  ldb ={} as any || null ;
  fileToUpload : File | null = null;
  fileUploadService: any;
  httpClient: any;
  selectedFiles?: FileList;
  currentFile?: File;

  //  fileName = '';
 
   filename!:string;
  // validate_message!:string;
  // content= [];
  // file!:null
  // Subscribe!:Subscribe;
  
  
  


  constructor(private http: HttpClient) { }
  selectFile(event: any): void {
    this.selectedFiles = event.target.files[0];
    console.log(this.selectedFiles)
  }
  
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
  //  this. uploadFileToActivity();
  }

  handleFileInput(files:FileList | any) {
    this.fileToUpload = files.item(0);
    console.log(this.fileToUpload)
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
  //   uploadFileToActivity() {
  //     this.fileUploadService.postFile(this.fileToUpload).subscribe((data: any) => {
  //       // do something, if upload success
  //       }, (error: any) => {
  //         console.log(error);
  //       });
  //   }
  //   postFile(fileToUpload: File): Observable<boolean> {
  //     const endpoint = 'your-destination-url';
  //     const formData: FormData = new FormData();
  //     formData.append('fileKey', fileToUpload, fileToUpload.name);
  //     return this.httpClient
  //       .post(endpoint, formData)
  //       .map(() => { return true; })
  //       .catch((e: any) => this.handleError(e));
  // }
  // handleError(e: any) {
  //   throw new Error('Method not implemented.');
  // }
  // }

// onFileSelected(event:any) {

//   const file:File = event.target.files();

//   if (file) {

//       this.fileName = file.name;

//       const formData = new FormData();

//       formData.append("fileupload", file);

      // const upload$ = this.http.post("fileupload", formData);

      // upload$.subscribe();
  

}

