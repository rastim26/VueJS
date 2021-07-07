Vue.createApp({
   /* data () {
      return {

      }
   } */

   data: () => ({
      myHtml: "<h1>Заголовок</h1>" ,
      title: 'I\'m a Developer' ,
      person: {
         firstName: 'Rastim',
         lastName: 'Safarov',
         age: 31 ,
      },
      items: [1,2,3,4,5,6,7,8,9]

   }),
   methods: {
      addItem(){
         this.items.unshift(this.$refs.myInput.value),
         this.$refs.myInput.value=''
      }
   },
   computed: {
      evenItems() {
         return this.items.filter(i => i % 2 === 0)
      }
   },
}).mount('#app')