import { Controller, Get } from "@nestjs/common";

@Controller('/app')
export class AppController {
    @Get()
    getRootRoute() {
        return 'hi there!'
    }

    @Get('/simple')
    getSimpleRoute() {
        return 'hi there simple!'
    }

    @Get('/bye')
    getByeThere() {
        return 'bye there!'
    }
}