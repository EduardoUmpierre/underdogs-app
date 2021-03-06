import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpandableHeaderComponent } from './default/expandable-header/expandable-header';
import { UserLevelComponent } from './default/user-level/user-level';
import { IonicModule } from 'ionic-angular';
import { LoaderComponent } from './loader/loader';
import { ManagerProductListComponent } from './manager/product-list/manager-product-list';
import { ProductIngredientsListComponent } from './default/product-ingredients-list/product-ingredients-list';
import { ManagerGenericListComponent } from './manager/generic-list/manager-generic-list';

@NgModule({
    declarations: [
        ExpandableHeaderComponent,
        UserLevelComponent,
        LoaderComponent,
        ManagerProductListComponent,
        ProductIngredientsListComponent,
        ManagerGenericListComponent
    ],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [
        ExpandableHeaderComponent,
        UserLevelComponent,
        LoaderComponent,
        ManagerProductListComponent,
        ProductIngredientsListComponent,
        ManagerGenericListComponent
    ]
})
export class ComponentsModule {
}
