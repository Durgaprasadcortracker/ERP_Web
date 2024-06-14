import { Component } from '@angular/core';
import { NgxEditorModule,Toolbar } from 'ngx-editor';



@Component({
  selector: 'app-email-conversation',
  standalone: true,
  imports: [NgxEditorModule],
  templateUrl: './email-conversation.component.html',
  styleUrl: './email-conversation.component.css'
})


export class EmailConversationComponent {
  editor: any;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
 
}

