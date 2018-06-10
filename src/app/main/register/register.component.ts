import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../../services/register.service';
import { ToastrService } from 'ngx-toastr';
import { Member } from '../../models/member.model';
import { RegisterModel } from '../../models/register.model';
@Component({
  selector: 'app-register',
  providers: [ RegisterService ],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  firstName: string;
  lastName: string;
  login: string;
  password: string;
  birthDate: Date;
  registerModel : RegisterModel;
  constructor(
    private registerService: RegisterService,
    private toastr: ToastrService) {}

  ngOnInit() {
    this.registerModel = this.registerService.getRegisterModel();
  }

  registerMember(): void {
    if (this.firstName && this.lastName && this.login && this.birthDate
      && this.validateInputData(this.firstName, this.lastName, this.login)) 
    {
      if (this.password && this.validatePassword(this.password)) {
        const member = new Member(this.firstName, this.lastName, this.login, this.password, this.birthDate.toString());
        this.registerService.registerMember(member);
      } else {
        this.toastr.error('Make sure password length is greater than 8', 'Register Error');
      }
    } else {
      this.toastr.error('Make sure that every field is filled', 'Register Error');
    }
  }

  private validateInputData(firstName: string, lastName: string, login: string): boolean {
    return firstName.length !== 0 && lastName.length !== 0 && login.length !== 0;
  }

  private validatePassword(password: string) {
    return password.length >= 8;
  }

}
