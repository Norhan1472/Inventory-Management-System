import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../history.service';
import { History } from '../history';
import  jspdf from 'jspdf';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import 'jspdf-autotable';

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit{
  histories : History[] = [];

  constructor(private historyService:HistoryService){}

  ngOnInit(): void {
    this.getAllHistories();
  }
  getAllHistories(){
    this.historyService.getAllHistories().subscribe(
      data=>{
        this.histories = data;
      }
    )
  }
  header =[['empName','productName','serialNumber',
  'brand','description','dateReceived','dateRetrieved','reason']];
   
  data = this.histories.map((history) => {
    
      history.empName,
      history.productName,
      history.serialNumber,
      history.brand,
      history.description,
      history.dateReceived,
      history.dateRetrieved,
      history.reason
  });

  generatePdf(){

const doc = new jsPDF.default();
doc.setFontSize(20);
doc.text("PDF file in Angular",11,8);
    (doc as any).autoTable({head: this.header, body: [this.histories],theme:'striped'});
    doc.output('dataurlnewwindow');
    doc.save('data.pdf');
}
  downloadPdf(){
    this.historyService.generatePdf().subscribe(
      data=>{
        console.log(data);
      }
    )
  }
}
