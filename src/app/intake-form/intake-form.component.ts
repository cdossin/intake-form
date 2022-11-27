import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { SnackbarService } from '../services/snackbar.service';
import { IntakeFormDataService } from './intake-form.service';

export interface State {
  name: string;
  abbreviation: string;
}

// export interface Occupation {
//   name: string;
// }

export interface Data {
  name: any,
  email: any,
  password: any,
  occupation: any,
  state: any

}



@Component({
  selector: 'app-intake-form',
  templateUrl: './intake-form.component.html',
  styleUrls: ['./intake-form.component.scss']
})
export class IntakeFormComponent implements OnInit, OnDestroy {
  @ViewChild('myForm') myForm: NgForm;
  fetchForm: FormGroup;
  occupation: [];
  state: State[];
  submitData: Data[];
  isSuccess: boolean;
  isFetching: boolean;
  private _unsubscribeAll: Subject<void>;
  name: string;
  email: string;
  password: string;
  job: string;
  st: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _intakeFormDataService: IntakeFormDataService,
    private _snackbarService: SnackbarService,
    private _router: Router
  ) {
    this._unsubscribeAll = new Subject();
  }


  ngOnInit(): void {

    //add email validation
    this.fetchForm = this._formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      occupation: ['', Validators.required],
      state: ['', Validators.required],
    });

    this._intakeFormDataService.getFetchData().subscribe((response: any) => {
      this.occupation = response.occupations;
      this.state = response.states;
    });
  }

  submit() {
    

    if (this.fetchForm.valid) {
      this.isFetching = true;
          //add check to see if all of fields are filled out, if not error out & send snackbar error 

    this.name = this.fetchForm.get('fullName').value;
    this.email = this.fetchForm.get('email').value;
    this.password = this.fetchForm.get('password').value;
    this.job = this.fetchForm.get('occupation').value;
    this.st = this.fetchForm.get('state').value;

    this._intakeFormDataService.submitFetchData(this.name, this.email, this.password, this.job, this.st).subscribe((response: any) => {
      this._snackbarService.openSnackBar('Successfully submitted data. Thank you');
      console.log(response);
      this.isFetching = false;
      this.isSuccess = true;
      //this.fetchForm.reset();
      //this.fetchForm.markAsPristine();
      this.myForm.resetForm();
      //add code to clear form 
    });
    }
    else {
      this._snackbarService.openSnackBar('Errors submitting form. Please correct errors and try again.');
    }
  }

  returnHome() {
    this._router.navigateByUrl('');
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
