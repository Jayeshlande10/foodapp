import { IsNotEmpty, IsString, IsNumber, MaxLength } from "class-validator";

export class CreateProductDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    productName: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    productCode: string;

    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    releaseDate: string;

    @IsNumber()
    @IsNotEmpty()
    starRating: number;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsString()
    @IsNotEmpty()
    imageUrl: string;
}
