import { IsBoolean, IsNotEmpty, IsOptional, IsString, MaxLength } from "class-validator";
import { Category } from "./category.entity";
import { ValidatorFields } from "../../shared/domain/validators/validator-fields";

class CategoryRules {
  @MaxLength(50)
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsOptional()
  description: string | null;

  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;

  constructor({ name, description, isActive }: Category) {
    Object.assign(this, { name, description, isActive });
  }
}

class CategoryValidator extends ValidatorFields<CategoryRules> {
  validate(entity: Category) {
    return super.validate(new CategoryRules(entity));
  }
}

export class CategoryValidatorFactory {
  static create() {
    return new CategoryValidator();
  }
}
