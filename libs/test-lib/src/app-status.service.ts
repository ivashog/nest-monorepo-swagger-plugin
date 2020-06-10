import { Injectable } from '@nestjs/common';
import moment from 'moment';
import path from 'path';

import { AppStatusResponseDto } from './app-status-response.dto';
import * as fs from 'fs';


@Injectable()
export class AppStatusService {
    private readonly startTime: number;
    private readonly packageJson: any;

    constructor() {
        this.startTime = Date.now();
        this.packageJson = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'package.json'), { encoding: 'utf-8' }));
    }

    async getAppStatus(): Promise<AppStatusResponseDto> {
        const { name: appName, version } = this.packageJson;
        return {
            status: 'OK',
            name: appName,
            version,
            uptime: moment().to(this.startTime),
        };
    }
}
