import { Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { TestDialogComponent } from '../test-dialog/test-dialog.component';
import { CateServicesService } from '../api/cate-services.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

@Component({
  
  selector: 'app-test-category-list',
  templateUrl: './test-category-list.component.html',
  styleUrls: ['./test-category-list.component.css'],

})
export class TestCategoryListComponent implements OnInit {
  displayedColumns: string[] = ['productName', 'category', 'freshness', 'price', 'image','date','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api : CateServicesService){

  }
  ngOnInit(): void {
    this.getAllProduct();
  }

  openDialog() {
     this.dialog.open(TestDialogComponent,{
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if(val === 'save'){
        this.getAllProduct();
      }
    })
  }
  getAllProduct(){
    this.api.getProduct()
    .subscribe({
      next:(res)=>{
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort
      },
      error:(err)=>{
        alert("Lỗi server !")
      }
    })
  }
  editProduct(row : any){
    this.dialog.open(TestDialogComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val === 'update'){
        this.getAllProduct();
      }
    })
  }
  deleteProduct(id:string){
    this.api.deleteProduct(id)
    .subscribe({
      next:(res)=>{
        alert("Product Deleted Succsessfully");
        this.getAllProduct();
        
      },
      error:()=>{
        alert("Error delete!!")
      }
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
