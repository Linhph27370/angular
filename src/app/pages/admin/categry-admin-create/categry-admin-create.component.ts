import { Component } from '@angular/core';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { ICategory } from '../interface/Icategory';
import { CategoryAdminService } from '../services/category-admin.service';

@Component({
  selector: 'app-categry-admin-create',
  templateUrl: './categry-admin-create.component.html',
  styleUrls: ['./categry-admin-create.component.css']
})
export class CategryAdminCreateComponent {
  categoryForm = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    
  });

  constructor(
    private formBuilder: UntypedFormBuilder,
    private categoryService: CategoryAdminService
  ) {}
  onHandleSubmit() {
    const category: ICategory = {
      id: '',
      name: this.categoryForm.value.name || '',

    };

    this.categoryService.addCategory(category).subscribe((category) => {
      alert(`Thêm category thành công: ${category.name}`);
    });
  }
}
