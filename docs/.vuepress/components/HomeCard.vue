<template>
  <div class="d-flex flex-wrap">
    <div v-for="item in sidebar" class="card card-4">
      <h2 class="card__title">{{item.text}}</h2>
      <p class="card__apply">
        <a class="card__link" :href="item.link">GoTo →</a>
      </p>
    </div>
  </div>
</template>

<script>
import { sidebar } from "../sidebarData.js";
export default {
  data() {
    return {
      sidebar:sidebar.map(item=>{
        // item.link = '/mongo-qrf/'+item.link;
        return item;
      })
    };
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono&display=swap");
font-family: "JetBrains Mono", monospace;

.cards {
  display: flex;
  flex-wrap: wrap;
}

.card {
  margin:1rem 1rem 1rem 1rem;
  padding: 20px;
  width: 500px;
  min-height: 100px;
  display: grid;
  grid-template-rows: 5px 0px 0.5fr 10px;
  border-radius: 10px;
  box-shadow: 0px 6px 10px rgb(0 0 0 / 25%);
  transition: all 0.2s;
  flex: 0 1 25%;

}

.card:hover {
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  transform: scale(1.01);
}

.card__link,
.card__exit,
.card__icon {
  position: relative;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.9);
  padding-bottom:10px;
}

.card__link::after {
  position: absolute;
  top: 25px;
  left: 0;
  content: "";
  width: 0%;
  height: 3px;
  background-color: rgba(255, 255, 255, 0.6);
  transition: all 0.5s;
}

.card__link:hover::after {
  width: 100%;
}

.card__exit {
  grid-row: 1/2;
  justify-self: end;
}

.card__icon {
  grid-row: 2/3;
  font-size: 30px;
}

.card__title {
  grid-row: 3/4;
  font-weight: 400;
  color: #ffffff;
  min-height: 75px;
}

.card__apply {
  grid-row: 4/5;
  align-self: center;
}
.card-4 {
  /* background: radial-gradient(#009d65, #10aa50); */
  background : linear-gradient(to right, rgb(34, 197, 94), rgb(21, 128, 61))
}

.d-flex{
  display: flex;
   flex-wrap: wrap;
}

</style>
