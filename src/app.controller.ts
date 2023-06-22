import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
    @Get()
    getRootRoute() {
        return 'hi there!'
    }

    @Get('/simple')
    getSimpleRoute() {
        return 'hi there simple!'
    }
}