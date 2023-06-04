import { Catch, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch()
export class AllExceptionsFilter extends BaseExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        let status = exception.status || HttpStatus.INTERNAL_SERVER_ERROR;
        const message = exception?.response?.message || (exception instanceof Error ? exception?.message : exception?.message?.error);
        response.status(status).json({
            statusCode:status,
            success: false,
            error: message
        });
    }
}
