import { IsNotEmpty } from "class-validator";
import { subscriptionLogsToBeFn } from "rxjs/internal/testing/TestScheduler";

export class CreateBoardDto {
    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    description: string;
}