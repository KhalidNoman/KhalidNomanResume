import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule} from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'

@NgModule({
    imports:[
        MatTableModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule
    ],
    exports:[
        MatTableModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule
    ]

})

export class AngularMaterialModule{}