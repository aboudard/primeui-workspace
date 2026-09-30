import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateTodoDto {
  @ApiProperty({ description: 'The todo title' })
  title: string;

  @ApiPropertyOptional({ description: 'Additional todo details' })
  content?: string;
}
