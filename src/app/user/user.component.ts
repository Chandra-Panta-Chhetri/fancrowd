import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { DeleteDialogComponent } from '../shared/components/delete-dialog/delete-dialog.component';
import User from '../shared/models/user';
import { EditUserDialogComponent } from './edit-user-dialog/edit-user-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
})
export class UserComponent implements OnInit {
  user: User | null = null;
  loggedInUser: User | null = null;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    const username = this.activatedRoute.snapshot.params['username'];
    this.user = this.userService.getUserByUsername(username);
    this.loggedInUser = this.userService.getUserByUsername('chandra-panta');
    if (!this.user) {
      this.router.navigate(['../']);
    }
  }

  deleteUser() {
    this.userService.deleteUserByUsername(this.user?.username || '');
    this.router.navigate(['../']);
  }

  banUser() {
    this.userService.banUserByUsername(this.user?.username || '');
    this.router.navigate(['../']);
  }

  openEditAccountDialog() {
    const dialogRef = this.dialog.open(EditUserDialogComponent, {
      data: { ...this.user },
      autoFocus: false,
      backdropClass: 'material-dialog-backdrop',
      width: '400px',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((updatedUser: User) => {
      if (updatedUser) {
        this.user = updatedUser;
      }
    });
  }

  openDeleteAccountDialog() {
    this.dialog.open(DeleteDialogComponent, {
      data: {
        title: 'Delete Account Confirmation',
        details: 'Are you sure you want to delete your account?',
        onConfirmCb: this.deleteUser.bind(this),
      },
      width: '360px',
      height: '180px',
      autoFocus: false,
      backdropClass: 'material-dialog-backdrop',
    });
  }

  openBanUserAccountDialog() {
    this.dialog.open(DeleteDialogComponent, {
      data: {
        title: 'Ban User Confirmation',
        details: `Are you sure you want to ban ${this.user?.username}?`,
        onConfirmCb: this.banUser.bind(this),
      },
      width: '360px',
      height: '180px',
      autoFocus: false,
      backdropClass: 'material-dialog-backdrop',
    });
  }
}
