import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';

@NgModule({
imports: [MatButtonModule, MatToolbarModule, MatExpansionModule, MatGridListModule, MatTableModule ],
exports: [MatButtonModule, MatToolbarModule, MatExpansionModule, MatGridListModule, MatTableModule ]
})
export class MaterialAppModule { }
