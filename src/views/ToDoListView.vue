<template>
  <div id="app" class="container-fluid text-center">
    <h1 class="text-info">{{ title }}</h1>
    <p>{{ msg }}</p>
    <p class="msg2">{{ msg2 }}</p>

    <div class="col">
      <div v-if="error" class="alert alert-danger" @click="error = !error">
        <strong>Error:</strong> Please add the task name first!
      </div>
      <form @submit.prevent="addTask">
        <div class="input-group mb-3">
          <input type="text" class="form-control" placeholder="Task Name" v-model="taskName">
          <div class="input-group-append">
            <button v-if="update" class="btn btn-warning" type="submit">
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button v-else class="btn btn-success" type="submit">
              <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </form>

      <button v-if="deleteMultiple" class="btn btn-danger mb-3" @click="deleteMulti">Delete Selected</button>

      <ul class="list-group">
        <li v-for="(task_name,index) in tasks" :key="index" class="list-group-item list-group-item-info">
          <div class="row">
            <div class="col-2">
              <input type="checkbox" :checked="task_name['check']" @change="changeCheck" :id="task_name['index']" class="form-control">
            </div>
            <div class="col" @click="loadData(index)">{{ task_name['task'] }}
              <select >
                <option disabled value="">Choisissez</option>
                <option>To Do</option>
                <option>Doing</option>
                <option>Done</option>
              </select></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Your ToDo List',
      msg: 'Welcome to Your First ToDo List',
      msg2: 'To delete: press the left square of your task, then select delete',
      taskName: '',
      tasks: [
        { index: 0, task: 'Shop for groceries', check: false },
        { index: 1, task: 'Do homework', check: false },
        { index: 2, task: 'Do laundry', check: false },
        { index: 3, task: 'Take out the garbage', check: false }
      ],
      error: false,
      update: false,
      updateIndex: null,
      ids: [],
      deleteMultiple: false
    }
  },
  updated: function () {
    console.log('UPDATED----')
    this.tasks.forEach((task) => {
      console.log(task.task, '--', task.check)
    })
    console.log('----')
  },
  methods: {
    deleteMulti: function (e) {
      this.tasks.forEach((task) => {
        console.log(task.task, task.check)
      })
      console.log('----')
      const ids = []
      this.tasks.forEach((task) => {
        if (task.check === true) {
          ids.push(task.index)
        }
      })
      ids.forEach(id => {
        this.tasks = this.tasks.filter(function (task) {
          return task.index !== id
        })
      })
      this.deleteMultiple = false
      this.tasks.forEach((task) => {
        console.log('DELETE:', task.task, task.check)
      })
    },

    changeCheck: function (e) {
      this.tasks[e.target.id].check = e.target.checked
      let count = 0
      this.tasks.forEach((task) => {
        if (task.check === true) {
          count = count + 1
        }
      })
      this.deleteMultiple = (count > 0)
      console.log('changeCheck')
      this.tasks.forEach((task) => {
        console.log(task.task, task.check)
      })
    },

    loadData: function (index) {
      console.log(this.tasks)
      this.taskName = this.tasks[index].task
      this.updateIndex = index
      this.update = true
    },

    addTask: function () {
      if (this.update === true) {
        this.update = false
        this.tasks[this.updateIndex].task = this.taskName
      } else {
        const theIndex = this.tasks.length
        if (this.taskName !== '') {
          this.tasks.push({
            index: theIndex,
            task: this.taskName,
            check: false
          })
        } else {
          this.error = true
        }
      }

      this.taskName = ''
    }
  }
}
</script>

<style >color :
.container-fluid text-center{
  background-color: #222222;
}
.msg2{
  color: rgb(178,34,34);
  font-size: 12px;
}
.col{
  float:left;
  text-align: start;
  width : 350px;
}

</style>
