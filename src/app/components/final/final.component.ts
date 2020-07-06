import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Register } from 'src/app/models/register';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css'],
})
export class FinalComponent implements OnInit {
  register: Register;
  address: string;

  constructor(public registerService: RegisterService) {}

  ngOnInit(): void {
    this.register = this.registerService.getRegisterInfo();
    console.log(this.register);
    this.address = this.register.addressLine1 + this.register.addressLine2;
  }

  Submit() {
    alert('Successfully Registered');
  }
}
