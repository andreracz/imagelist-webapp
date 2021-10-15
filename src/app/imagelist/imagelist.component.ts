import { Component, OnInit } from '@angular/core';
import { ImageService } from '../image.service';
import { Image } from '../model/image';


@Component({
  selector: 'image-list',
  templateUrl: './imagelist.component.html',
  styleUrls: ['./imagelist.component.scss']
})
export class ImageListComponent implements OnInit {


    images: Image[] = [];

  title:string;
  fileBase64:string;
  extension:string;

  constructor(private imageService: ImageService) { }

  ngOnInit(): void {
      this.reload();
  }

  reload() {
    this.imageService.getImageList().subscribe(images => this.images = images);
  }

  handleFile(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    this.extension = file.name.substring(file.name.lastIndexOf(".")+1);
    reader.onload = () => {
        this.fileBase64 = "" + reader.result;
        this.fileBase64 = this.fileBase64.substring(this.fileBase64.lastIndexOf(',')+1);
    };
  }

  newFile() {
    this.imageService.addImage(this.title, this.fileBase64, this.extension).subscribe(
      () => this.reload()
    )
  }

}