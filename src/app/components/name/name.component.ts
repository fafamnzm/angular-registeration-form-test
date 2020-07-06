import { Component, OnInit } from '@angular/core';
import { Register } from '../../models/register';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css'],
})
export class NameComponent implements OnInit {
  register: Register;

  constructor(public registerService: RegisterService) {}

  ngOnInit(): void {
    this.register = this.registerService.getRegisterInfo();
    console.log(this.register);
  }
  ngOnDestroy(): void {
    this.registerService.info = this.register;
  }
}
