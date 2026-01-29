const tasks = [
    {
        description: 'Push to github repo',
        status: 'incomplete'
    },
    {
        description: 'Push to github repo',
        status: 'incomplete'
    },
    {
        description: 'Push to github repo',
        status: 'complete'
    }
];

renderTasks();

function addTask() {
    const inputEle = document.querySelector('.js-task-input');
    const inputTask = inputEle.value.trim();

    if(inputTask === '') {
        document.querySelector('.js-input').innerHTML += 
        `
            <p class="error-message js-error-message">
                please enter a task first
            </p>
        `
        setTimeout(() => {
            document.querySelector('.js-error-message').remove();
        }, 2000);
    } else{
        tasks.push({
            description: inputTask,
            status: 'incomplete'
        });
    }

    renderTasks();
    inputEle.value = '';
}

function renderTasks() {
    let html = '';

    tasks.forEach((task) => {
        html += 
        `
            <div class="task-container">
                <div class="task">
                    <button class="btn-complete">
                        <img src="images/icons8-checkmark-48.png" alt="checkmark icon" width="20" height="20">
                    </button>
                    <p class="task-description">
                        ${task.description}
                    </p>
                </div>
                <button class="btn-delete">
                    <img src="images/icons8-delete-24.png" alt="delete icon">
                </button>
            </div>
        `
    });

    document.querySelector('.task-list').innerHTML = html;
    renderRemaining();
}

document.querySelector('.js-btn-add').addEventListener('click', () => {
    addTask();
});

function renderRemaining() {
    let remaining = 0;

    tasks.forEach((task) => {
        if(task.status === 'incomplete') {
            remaining++;
        }
    });

    document.querySelector('.js-remaining').innerHTML = remaining;
}