import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IItemAction } from 'src/app/interfaces/iitem-action';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  providers: [TitleCasePipe],
})
export class TableComponent implements OnInit {
  @Input() tableHeader: any[] = [];
  @Input() tableValues: any[] = [];
  @Input() actions: IItemAction[];

  @Output() getDataByPage: EventEmitter<PageEvent> =
    new EventEmitter<PageEvent>();

  @Output() save: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  pageEvent: PageEvent;

  constructor(private titlePipe: TitleCasePipe) {}

  ngOnInit(): void {}

  generateTolltipText(action: IItemAction, item: any) {
    var actionText = this.titlePipe.transform(action.name);
    if (item.title) {
      return `${actionText} ${item.title}`;
    }
    if (item.sceId) {
      return `${actionText} ${item.sceId}`;
    }
    if (item.name) {
      return `${actionText} ${item.name}`;
    }
    return actionText;
  }

  clicked(action: IItemAction, data: any) {
    if (action.handler) {
      return action.handler(data);
    }
  }
}
