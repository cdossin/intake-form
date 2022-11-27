import { Injectable } from "@angular/core";
import {MatSnackBar,
        MatSnackBarConfig,
        MatSnackBarRef} from '@angular/material/snack-bar';

@Injectable()
export class SnackbarService {
message: string;


snackBarConfig: MatSnackBarConfig;
snackBarRef: MatSnackBarRef<any>;
snackBarAutoHide = '3000';

constructor(private snackBar: MatSnackBar) {}

openSnackBar(message) {
    //this.snackBarConfig = new MatSnackBarConfig();
    //this.snackBarConfig.duration = parseInt(this.snackBarAutoHide, 0);
    this.snackBarRef = this.snackBar.open(message, '', {duration: 3000});
}
            
}
