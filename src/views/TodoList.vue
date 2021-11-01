<template>
  <div class="about">
    <h1>ToDoList</h1>
    <div class="container">
      <input v-model="task" class="mr10"/>
      <button @click="add">添加</button>
    </div>
    <div v-for="(i, index) in list" :key="i" class="mt10">
      <div v-if="!isCanEdit" @click="onChangeEdit">{{i}}</div>
      <div v-else>
        <input :value="i" @change="onInput" class="mr10" />
        <button @click="onFinish(index)">完成</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: '',
      list: [],
      isCanEdit: false,
      tempTask: '',
    };
  },
  methods: {
    add() {
      if (!this.list.includes(this.task)) {
        this.list.push(this.task);
        this.task = '';
      }
    },
    onInput(e) {
      this.tempTask = e.target.value;
    },
    onChangeEdit() {
      this.isCanEdit = !this.isCanEdit;
    },
    onFinish(index) {
      this.list[index] = this.tempTask;
      this.tempTask = '';
      this.onChangeEdit();
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
}
.mr10 {
  margin-right: 10px;
}
.mt10 {
  margin-top: 10px;
  text-align: left;
}
</style>
