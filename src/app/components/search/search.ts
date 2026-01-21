import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-search',
  imports: [ MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule ],
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  protected value: string = "";

  protected clearSearch() {
    this.value = "";
  }
}
