// ************************************  Exercício 3 *************************************

    const taskList = ["Lavar a louça", "Comprar Leite"]
    const newTaskList = process.argv[2]

    taskList.push(newTaskList)
    
    console.log("Tarefa adicionada com sucesso!")
    console.table(taskList)

 
