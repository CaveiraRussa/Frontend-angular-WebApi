import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit, AfterViewInit {
  @Input() name: string = '';
  @Input() icon: string = '';
  @Input() type: string = '';
  @Input() tooltip: string = '';

  @Input() disabledButton: boolean = false;
  @Output() buttonEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  clicked(event: any): void {
    this.buttonEvent.emit(event);
  }
}
