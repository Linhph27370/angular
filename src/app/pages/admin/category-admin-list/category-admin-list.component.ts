import { Component } from '@angular/core';
import { ICategory } from '../interface/Icategory';
import {CategoryAdminService} from '../services/category-admin.service';
@Component({
  selector: 'app-category-admin-list',
  templateUrl: './category-admin-list.component.html',
  styleUrls: ['./category-admin-list.component.css']
})
export class CategoryAdminListComponent {
  categorys: ICategory[] = [];
  constructor(private categoryService: CategoryAdminService) {
    this.categoryService.getCategory().subscribe(
      (data) => {
        this.categorys = data;
      },
      (error) => console.log(error.message)
    );
  }
  delete(id: string) {
    this.categoryService.deleteCategory(id).subscribe(() => {
      this.categorys = this.categorys.filter((categorys) => categorys.id !== id);
    });
  }
}
