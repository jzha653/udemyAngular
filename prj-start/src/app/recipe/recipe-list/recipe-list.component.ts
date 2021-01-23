import {Component, OnInit} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('dog food', 'desc', 'https://upload.wikimedia.org/wikipedia/sco/' +
      '5/5f/Original_Doge_meme.jpg')
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
