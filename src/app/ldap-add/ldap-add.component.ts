import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

import { LdapDetailComponent } from '../ldap-detail/ldap-detail.component';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-ldap-add',
  templateUrl: '../ldap-detail/ldap-detail.component.html',
  styleUrls: ['../ldap-detail/ldap-detail.component.css'],
})
export class LdapAddComponent extends LdapDetailComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    fb: FormBuilder,
    router: Router,
    private snackBar: MatSnackBar
  ) {
    super(true, fb, router);
  }

  ngOnInit(): void {
    super.onInit();
  }

  validateForm(): void {
    console.log('LdapAddComponent - validateForm');
    this.processValidateRunning = true;
    this.usersService.addUser(this.getUserFromFormControl()).subscribe(
      (data) => {
        this.processValidateRunning = false;
        this.errorMessage = '';
        this.snackBar.open('Utilisateur ajoute !', 'X');
      },
      (error) => {
        this.processValidateRunning = false;
        this.errorMessage = 'Lutilisateur na pas pu etre ajoute !';
        this.snackBar.open('Erreur dans lajout de lutilisateur !', 'X');
      }
    );
  }
}
