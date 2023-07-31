import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../interface/Icategory';
@Injectable({
  providedIn: 'root'
})
export class CategoryAdminService {

  API = 'http://localhost:3000/category';

  constructor(public http: HttpClient) {}
  getCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.API}`);
  }
  getCategoryById(id: string): Observable<ICategory> {
    return this.http.get<ICategory>(`${this.API}/${id}`);
  }

  addCategory(Category: ICategory): Observable<ICategory> {
    return this.http.post<ICategory>(`${this.API}`, Category);
  }
  updateCategory(Category: ICategory): Observable<ICategory> {
    return this.http.put<ICategory>(`${this.API}/${Category.id}`, Category);
  }
  deleteCategory(id: string): Observable<ICategory> {
    return this.http.delete<ICategory>(`${this.API}/${id}`);
  }
}
