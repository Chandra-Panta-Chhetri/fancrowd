import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { DiscussionBoardComponent } from './discussion-board.component';
import { DiscussionBoardRoutingModule } from './discussion-board-routing.module';
import { FandomSelectionComponent } from './fandom-selection/fandom-selection.component';

@NgModule({
  declarations: [DiscussionBoardComponent, FandomSelectionComponent],
  imports: [CommonModule, CoreModule, SharedModule, DiscussionBoardRoutingModule],
})
export class DiscussionBoardModule {}
