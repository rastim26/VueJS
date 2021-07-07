const h= Vue.h;
const app = Vue.createApp({
   data() {
      return {
         title:'Свойства template'
      }
   },
   methods: {
      changeTitle(){
         this.title='Текст изменен!'
      }
   },
   /* template:`
      <div class="card center">
         <h1>{{title}}</h1>
         <button class="btn" @click="title='Текст изменен!'">Изменить</button>
      </div>
   `, */
   render() {
      return h(
         'div',
         {
            class: 'card center'
         },
         [
            h('h1',{}, this.title),
            h('button',{
               class:'btn',
               onClick: this.changeTitle
            }, 'изменить')
         ]
      )
   },

})

app.mount('#app')