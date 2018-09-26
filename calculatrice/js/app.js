/**
 * Todolist
 */

var tasks = [
  {
    label: 'Je code une todolist',
    done: false
  },
  {
    label: 'Je code facebook',
    done: true
  },
  {
    label: 'Je code une application qui marche',
    done: false
  }
];

var app = {
  render: function() {
    // Récupération de références vers des éléments du DOM.
    app.getDOMReferences();
    // Creation du form
    app.createForm();
    // Creation du compteur
    app.createCounter();
    // Creation de la liste
    app.createList();
  },

  getDOMReferences: function() {
    app.todo = document.getElementById('todo');
    app.todo.innerHTML = '';
  },

  // Creation du form
  createForm: function() {
    var form = document.createElement('form');
    form.addEventListener('submit', app.addTask);

    // Créer un champ input
    var input = document.createElement('input');
    app.input = input;
    input.id = 'todo-input';
    input.type = 'text';
    input.placeholder = 'Ajouter une tâche';

    // Ajout du champ dans le form
    form.appendChild(input);

    // Ajout du form dans le DOM (affichage)
    app.todo.appendChild(form);
  },

  // Creation du compteur
  createCounter: function() {
    // Créer le compteur (div)
    var counter = document.createElement('div');
    app.counter = counter;
    counter.id = 'todo-counter';

    // Ajout du contenu
    var nbTasksUndone = tasks.filter(task => !task.done).length;
    counter.textContent = `${nbTasksUndone} tâches en cours`;

    // Ajouter au DOM
    app.todo.appendChild(counter);
  },

  // Creation de la liste de tâches
  createList: function() {
    // Créer la liste
    var list = document.createElement('ul');
    app.list = list;
    list.id = 'todo-list';

    tasks.forEach(app.generateTask);

    // Ajouter la liste au DOM
    app.todo.appendChild(list);
  },

  addTask: function(evt) {
    evt.preventDefault();

    var text = app.input.value.trim(); //
    if (text !== '') {
      tasks.push({
        label: text,
        done: false
      });
      app.input.value = '';
      app.render();
    }
  },

  generateTask: function(data) {
    var task = document.createElement('li');
    task.className = 'task';

    if (data.done) {
      task.classList.add('task--done');
    }

    var label = document.createElement('label');
    label.textContent = data.label;
    label.className = 'task-label';

    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = data.done;

    checkbox.addEventListener('click', function() {
      data.done = !data.done;
      app.render();
    });

    task.appendChild(checkbox);
    task.appendChild(label);
    app.list.appendChild(task);
  }
};


// Chargement du DOM
document.addEventListener('DOMContentLoaded', app.render);
