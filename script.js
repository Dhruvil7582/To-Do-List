let tasks = [
      { id: 1, text: 'Learn JavaScript basics', done: true,  priority: 'high'   },
      { id: 2, text: 'Build a to-do list app',  done: false, priority: 'high'   },
      { id: 3, text: 'Practice DOM manipulation', done: false, priority: 'medium' },
      { id: 4, text: 'Read MDN documentation',  done: false, priority: 'low'    },
    ];
    let filter = 'all';
    let nextId = 5;

    // Set today's date
    const days   = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const now    = new Date();
    document.getElementById('date-label').textContent =
      days[now.getDay()] + ', ' + months[now.getMonth()] + ' ' + now.getDate() + ' ' + now.getFullYear();

    function render() {
      const list = document.getElementById('task-list');
      const visible = tasks.filter(t => {
        if (filter === 'active') return !t.done;
        if (filter === 'done')   return  t.done;
        if (filter === 'high')   return  t.priority === 'high';
        return true;
      });

      if (visible.length === 0) {
        list.innerHTML = `
          <div class="empty-state">
            <i class="fa-solid fa-circle-check"></i>
            No tasks here!
          </div>`;
      } else {
        list.innerHTML = visible.map(t => `
          <li class="task-item${t.done ? ' done' : ''}" id="item-${t.id}">
            <div class="task-check${t.done ? ' checked' : ''}"
                 onclick="toggle(${t.id})"
                 role="checkbox"
                 aria-checked="${t.done}"
                 tabindex="0"
                 aria-label="Mark task done">
              <i class="fa-solid fa-check check-icon"></i>
            </div>
            <span class="task-text">${escHtml(t.text)}</span>
            <span class="task-tag p-${t.priority}">${t.priority}</span>
            <button class="task-delete" onclick="remove(${t.id})" aria-label="Delete task">
              <i class="fa-solid fa-trash"></i>
            </button>
          </li>`).join('');
      }

      const active = tasks.filter(t => !t.done).length;
      document.getElementById('footer-count').textContent =
        active + ' task' + (active === 1 ? '' : 's') + ' remaining';
    }

    function escHtml(s) {
      return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    }

    function addTask() {
      const input    = document.getElementById('task-input');
      const text     = input.value.trim();
      if (!text) return;
      const priority = document.getElementById('priority-select').value;
      tasks.unshift({ id: nextId++, text, done: false, priority });
      input.value = '';
      render();
    }

    function toggle(id) {
      const t = tasks.find(t => t.id === id);
      if (t) t.done = !t.done;
      render();
    }

    function remove(id) {
      tasks = tasks.filter(t => t.id !== id);
      render();
    }

    function setFilter(f, btn) {
      filter = f;
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      render();
    }

    function clearDone() {
      tasks = tasks.filter(t => !t.done);
      render();
    }

    // Press Enter to add
    document.getElementById('task-input').addEventListener('keydown', e => {
      if (e.key === 'Enter') addTask();
    });

    render();