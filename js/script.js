var app = new Vue(
  {
    el: "#app",
    data: {
      cdList: [],
      genreList: [
        "Tutti"
      ],
      count: 0,
      selected: "Tutti"
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
      },
      // select: function(){
      //   for(var i = 0; i < this.cdList.length){
      //     if(this.selected != ""){
      //
      //     }
      //   }
      // }
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
