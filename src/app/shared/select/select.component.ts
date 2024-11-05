import { Component, EventEmitter, Input, OnInit, Output, output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss'
})
export class SelectComponent implements OnInit {
  @Input() title: string = "";//from parent to chiled
  @Input() data: any[] = [];
  @Output() selectedValue = new EventEmitter();// from chiled to parent

  ngOnInit(): void {

  }

  detectChanges(event: any) {
    this.selectedValue.emit(event)
  }
}
