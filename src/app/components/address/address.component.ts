import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { Register } from 'src/app/models/register';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent implements OnInit {
  register: Register;
  constructor(public registerService: RegisterService) {}

  ngOnInit(): void {
    this.register = this.registerService.info;
    console.log(this.register);
  }
}
