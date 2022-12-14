import { NgModule } from '@angular/core';
import { FavouritesComponent } from './favourites.component';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListComponent } from 'src/app/features/card-list/components/list/list.component';
import { FavouritesRoutingModule } from './favourites-routing.module';

@NgModule({
  declarations: [FavouritesComponent],
  imports: [CoreModule, SharedModule, ListComponent, FavouritesRoutingModule],
  exports: [FavouritesComponent],
})
export class FavouritesModule {}
