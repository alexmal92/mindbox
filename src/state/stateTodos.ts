import { v4 } from 'uuid';

export const stateTodos =
  [
    {
      id: v4(),
      name: 'Тестовое задание',
      success: false
    },
    {
      id: v4(),
      name: 'Прекрасный код',
      success: true
    },
    {
      id: v4(),
      name: 'Покрытие тестами',
      success: false
    },
  ]
