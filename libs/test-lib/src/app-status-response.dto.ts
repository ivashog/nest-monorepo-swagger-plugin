import { ApiProperty } from '@nestjs/swagger';

export class AppStatusResponseDto {
    @ApiProperty({ example: 'OK' })
    status: string;
    name: string;
    version?: string = '0.0.1';
    uptime: string;
}
