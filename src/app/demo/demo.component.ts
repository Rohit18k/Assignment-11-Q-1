import { Component, OnInit } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  additionResult: number = 0; 
  subtractionResult: number = 0; 

  constructor(private arithmeticService: ArithmeticService) { }

  ngOnInit(): void {
    
    this.additionResult = this.arithmeticService.Add(5, 3);
    this.subtractionResult = this.arithmeticService.Sub(8, 3);
  }
}
