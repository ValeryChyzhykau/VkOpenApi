import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VkApiService, VkLoginService } from './services';
import { ShowOnlinePipe } from './show-online.pipe';

@NgModule({
  declarations: [ShowOnlinePipe],
  imports: [CommonModule],
  providers: [VkApiService, VkLoginService],
  exports: [ShowOnlinePipe]
})
export class CoreModule {}
