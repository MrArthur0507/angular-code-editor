import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { CodeRunnerService } from '../code-runner.service';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [MonacoEditorModule, FormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {

  constructor(private codeRunnerService : CodeRunnerService) {}

output : string = '';
responseHistory: string[] = [];
runCode() {
  this.codeRunnerService.runCode(this.code).subscribe(response => {
    this.output = response;
    this.responseHistory.unshift(response);
  })
}

  editorOptions = {
    theme: 'vs-dark',  
    language: 'c',     
    minimap: { enabled: false } ,
    
  };

  code = `
  #include <stdio.h>
  
  int main() {
      printf("Hello, World!");
      return 0;
  }
  `;
}
