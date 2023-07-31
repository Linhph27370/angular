import { Component,Inject,OnInit } from '@angular/core';
import { FormGroup ,FormBuilder,Validators} from '@angular/forms';
import { CateServicesService } from '../api/cate-services.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-test-dialog',
  templateUrl: './test-dialog.component.html',
  styleUrls: ['./test-dialog.component.css']
})
export class TestDialogComponent implements OnInit {
  freshnessList = ["nike","Second Hand", "Refurbished"]
  productForm !: FormGroup;
  actionBtn : String ="Save "
  constructor(private formBuider: FormBuilder,
               private api :CateServicesService, 
               @Inject(MAT_DIALOG_DATA) public editData : any,
               private dialogRef : MatDialogRef<TestDialogComponent>){}
  ngOnInit():void{
   this.productForm = this.formBuider.group({
    productName : ['',Validators.required],
    category: ['',Validators.required],
    freshness: ['',Validators.required],
    price:['',Validators.required],
    image: ['',Validators.required],
    date:['',Validators.required]
   });
   console.log(this.editData);
   if(this.editData){
    this.actionBtn = "Update";
    this.productForm.controls['productName'].setValue(this.editData.productName)
    this.productForm.controls['category'].setValue(this.editData.category)
    this.productForm.controls['freshness'].setValue(this.editData.freshness)
    this.productForm.controls['price'].setValue(this.editData.price)
    this.productForm.controls['image'].setValue(this.editData.image)
    this.productForm.controls['date'].setValue(this.editData.date)

   }
  }
  addProduct(){
    console.log(this.productForm.value);
   if(!this.editData){
    if(this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res)=>{
          alert("product added successfully")
          this.productForm.reset();
          this.dialogRef.close('save')
        },
        error:()=>{
          alert("error while adding the product")
        }
      })
    }
   }else{
    this.updateProduct()
   }
  }
  updateProduct(){
    this.api.putProduct(this.productForm.value,this.editData.id)
    .subscribe({

      next:(res)=>{
        alert("product update successfully")
        this.productForm.reset();
        this.dialogRef.close('update')
      },
      error:()=>{
        alert("Error while updateting the record!!")
      }
    })
  }
  
}
