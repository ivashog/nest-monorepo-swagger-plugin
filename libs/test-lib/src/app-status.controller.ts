import { Controller, Get } from '@nestjs/common';
import { AppStatusService } from './app-status.service';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('App status')
export class AppStatusController {
    constructor(private readonly appService: AppStatusService) {}

    @Get()
    getStatus() {
        return this.appService.getAppStatus();
    }
}
