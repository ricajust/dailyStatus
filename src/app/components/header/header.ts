import { Component } from '@angular/core';
import {Search} from '../search/search';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {Dialog} from '../dialog/dialog';

@Component({
  selector: 'app-header',
  imports: [ Search, MatToolbarModule, MatButtonModule, MatIconModule, Dialog ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
