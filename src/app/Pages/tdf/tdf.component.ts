import { Component } from '@angular/core';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TDFComponent {
    user = {
    name: '',
    email: '',
    mobile: '',
    password: '',
    gender: ''
  };

  onSubmit(form: any) {

    if (form.valid) {

      console.log(this.user);

      alert('Form Submitted Successfully');

    } else {

      alert('Please fill all required fields correctly');

    }
  }
}
