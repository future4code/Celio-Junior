type Task = {
  userId: string | number;
  id: string | number;
  title: string;
  completed: boolean;
};

export const tasks: Task[] = [
  {
    userId: 1,
    id: 1,
    title: "O Café está pronto?",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "Lavou o carro?",
    completed: true,
  },
  {
    userId: 2,
    id: 3,
    title: "Tem pão véio?",
    completed: false,
  },
  {
    userId: 2,
    id: 4,
    title: "Aprender Express?",
    completed: true,
  },
  {
    userId: 3,
    id: 5,
    title: "Tomar banho?",
    completed: false,
  },
  {
    userId: 3,
    id: 6,
    title: "Cuidar do Bruce",
    completed: true,
  },
];
