var app = new Vue(
  {
    el: "#app",
    data: {
      cdList: [],
      genreList: [],
      count: 0
    },
    methods: {
      genre: function(){
        while(this.count < this.cdList.length){
          if(this.genreList.indexOf(this.cdList[this.count].genre) == -1){
            this.genreList.push(this.cdList[this.count].genre);
          }
          this.count++;
        }
        this.count = 0;
        console.log(this.genreList);
      }
    },
    mounted: function(){
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((risposta) => {
          this.cdList = risposta.data.response;
          this.genre;
      });
    }
  }
);
