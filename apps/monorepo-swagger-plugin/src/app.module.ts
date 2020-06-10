import { Module } from '@nestjs/common';

import { AppStatusModule } from '@app/test-lib';

@Module({
  imports: [AppStatusModule],
})
export class AppModule {}
