var app = new Vue(
  {
    el: "#app",
    data: {
      cdList: [],
      genreList: [
        "Tutti"
      ],
      count: 0,
      selected: "Tutti",
      order: ""
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
      ordina: function(a ,b){
        this.cdList.sort((a, b) => {
          if(this.order == "asc"){
            return a.year - b.year;
          }else if(this.order == "dis"){
            return b.year - a.year;
          }
        });
      }
    },
    mounted: function(){
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then((risposta) => {
          this.cdList = risposta.data.response;
      });
    }
  }
);
