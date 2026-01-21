import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatIcon} from '@angular/material/icon';

/**
 * @title Dialog with header, scrollable content and actions
 */
@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.html',
  imports: [MatButtonModule, MatDialogModule, MatIcon],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dialog {
  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example.html',
  imports: [ MatDialogModule, MatButtonModule ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentExampleDialog {}
