import { NgModule } from "@angular/core";
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatButtonModule} from '@angular/material/button'

@NgModule({
    imports:[
        MatTableModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule
    ],
    exports:[
        MatTableModule,
        MatCardModule,
        MatFormFieldModule,
        MatButtonModule
    ]

})

export class AngularMaterialModule{}