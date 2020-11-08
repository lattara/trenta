import { Component, OnInit } from '@angular/core';
import { navbarItems } from './menuItems';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showBurgerMenu = false;
  searchbarActive = false;
  navbarItems = navbarItems;
  submenuActive = false;
  thisSubSubMenuActive = false;
  selectedSubmenuIndex: number;
  selectedSubmenuMenuIndex: number;
  selectedLanguage: string;

  constructor() { }

  ngOnInit(): void {

  }

  toggleBurgerMenu(): void {
    this.showBurgerMenu = !this.showBurgerMenu;
  }
  closeBurgerMenu(): void{
    this.showBurgerMenu = false;
  }

  expandSearchBar(): void {
    this.searchbarActive = !this.searchbarActive;
  }

  closeSearchBar(): void {
    this.searchbarActive = false;
  }

  mouseOverMainMenu(index): void{
    this.submenuActive = true;
    this.selectedSubmenuIndex = index;
  }

  mouseOverSubMenu(index): void {
    this.thisSubSubMenuActive = true;
    this.selectedSubmenuMenuIndex = index;
  }

  closeMenu(): void {
    this.submenuActive = false;
    this.thisSubSubMenuActive = false;
  }

  english(): void {
    // implement english language switch here
    this.selectedLanguage = 'en';
  }

  french(): void {
    // implement french language switch here
    this.selectedLanguage = 'fr';
  }

}
