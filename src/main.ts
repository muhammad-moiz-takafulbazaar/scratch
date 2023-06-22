import { Controller, Get, Module } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

@Controller()
class AppController {
    @Get()
    getRootRoute() {
        return 'hi there!'
    }
}

@Module({
    controllers: [AppController]
})
class AppModule {}
