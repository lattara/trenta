import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showBurgerMenu = false;
  searchbarActive = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleBurgerMenu() {
    this.showBurgerMenu = !this.showBurgerMenu;
  }
  closeBurgerMenu(){
    this.showBurgerMenu = false;
  }

  expandSearchBar() {
    this.searchbarActive = !this.searchbarActive;
  }

  closeSearchBar() {
    this.searchbarActive = false;
  }

}
