import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  // sending data to parent component - custom event binding
  @Output() onSelectHomeemit = new EventEmitter<string>();
  @Output() onSelectLRemit = new EventEmitter<string>();
  @Output('directives') dir = new EventEmitter<string>();

  onSelectHome(lnk: string) {
    this.onSelectHomeemit.emit(lnk);
  }

  onSelectLR(lnk: string) {
    this.onSelectLRemit.emit(lnk);
  }

  onSelectDir(lnk: string) {
    this.dir.emit(lnk);
  }
}
