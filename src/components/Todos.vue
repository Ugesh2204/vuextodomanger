<template>
    <h3>Todos</h3>
    <div v-for="todo in allTodos" class="todo" :key="todo.id">
      {{todo.title}}
    </div>
</template>
<script>
import { mapGetters } from 'vuex';    
export default {
   name: "Todos",
   computed:mapGetters(['allTodos'])
}
</script>