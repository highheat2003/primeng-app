import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'primeng-app';
  items: MenuItem[];

  ngOnInit() {
    // @ts-ignore
    this.items = [{
      label: '데모',
      items: [
        {
          label: 'helloworld', routerLink: ['/helloworld']
        },
        {
          label: 'DataTable Inplace Cell Editing', routerLink: ['/books']
        },
        {
          label: 'DataTable Row Editing', routerLink: ['/books-row']
        },
      ]
    }, {
      label: 'UI Pattern', icon: 'fa fa-fw',
      items: [
        {label: 'Single data CRUD', styleClass : 'menu_item_text', routerLink: ['/pattern01'], icon: 'fa fa-check'},
        {label: 'Multi data R, Single CUD', styleClass : 'menu_item_text', routerLink: ['/pattern02'], icon: 'fa fa-check'},
        {label: 'Multi data R with move', styleClass : 'menu_item_text', routerLink: ['/pattern03'],
          icon: 'fa fa-check'},
        {label: 'Multi data CRUD (작업중)', styleClass : 'menu_item_text', routerLink: ['/pattern04'], icon: 'fa fa-check'},
        {label: 'Multi data CRUD, Sub Multi data CRUD per Master data row', styleClass : 'menu_item_text',
          icon: 'fa fa-check', routerLink: ['/pattern05']},

        {label: 'Pattern 06 - Multi data R, Single data CUD Navigation on Subwindow', styleClass : 'menu_item_text',
          routerLink: ['/pattern06']},
        {label: 'Pattern 07 - Multi data R with move, Single data CUD Navigation on Subwindow', styleClass : 'menu_item_text',
          routerLink: ['/pattern07']},
        {label: 'Pattern 08 - Multi data CRUD, Sub Multi data CRUD per Master data row', styleClass : 'menu_item_text',
          routerLink: ['/pattern08']},
        {label: 'Pattern 09 - Single data CRUD, Sub Multi data CRUD', styleClass : 'menu_item_text', routerLink: ['/pattern09']},
        {label: 'Pattern 10 - Multi data R, Master Single data CUD, Sub Multi data CRUD Master data row', styleClass : 'menu_item_text',
          routerLink: ['/pattern10']},
        {label: 'Pattern 11 - Dynamic Tab View', styleClass : 'menu_item_text', routerLink: ['/pattern11']}
      ]
    }];
  }
}
