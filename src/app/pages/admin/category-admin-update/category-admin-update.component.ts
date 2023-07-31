import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ICategory } from '../interface/Icategory';
import { CategoryAdminService } from '../services/category-admin.service';

@Component({
  selector: 'app-category-admin-update',
  templateUrl: './category-admin-update.component.html',
  styleUrls: ['./category-admin-update.component.css']
})
export class CategoryAdminUpdateComponent {
  category!: ICategory;
  categoryForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    
  });

  constructor(
    private formBuilder: FormBuilder,
    private categoryService: CategoryAdminService,
    private router: ActivatedRoute
  ) {
    this.router.paramMap.subscribe((params) => {
      const id = String(params.get('id'));
      this.categoryService.getCategoryById(id).subscribe(
        (data) => {
          console.log(data);
          this.category = data;

          this.categoryForm.patchValue({
            name: data.name,
          });
        },
        (error) => console.log(error.message)
      );
    });
  }
  onHandleSubmit() {
    if (this.categoryForm.valid) {
      const category: ICategory = {
        id: '',
        name: this.categoryForm.value.name || '',
        
      };

      this.categoryService.updateCategory(category).subscribe((category) => {
        console.log(category);
        console.log('category', category);
      });
    }
  }
}
