import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CvComponent implements OnInit, AfterViewInit {
  @ViewChild('cvContainer') cvContainer!: ElementRef;
  cvData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadJsonData();
  }

  ngAfterViewInit(): void {
    if (this.cvContainer) {
      this.adjustFontSize();
    }
  }

  loadJsonData() { 
    this.http.get('assets/cv-content.json').subscribe({
       next: data => { 
        this.cvData = data;
         console.log('CV Data Loaded:', this.cvData);
          setTimeout(() => this.adjustFontSize(), 0); 
        }, 
        error: error => { 
          console.error('Error Loading CV data:', error); 
        } 
      }); 
    }

  adjustFontSize() {
    const container = this.cvContainer.nativeElement;
    const maxFontSize = 16;
    const minFontSize = 10;
    const maxHeight = 1100;

    let fontSize = maxFontSize;
    container.style.fontSize = `${fontSize}px`;

    while (container.scrollHeight > maxHeight && fontSize > minFontSize) {
      fontSize--;
      container.style.fontSize = `${fontSize}px`;
    }
  }
}
