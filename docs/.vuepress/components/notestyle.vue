<template>
<div class="note">
  <div>
    <div>
    <h1> {{ title }} </h1>
    <p> {{ author }} </p>
    <p>如需转载请务必保留作者信息，注明转自剧情组并附上原帖地址。</p>
  </div>
  </div>
</div>
</template>

<script>
/* codepen: https://codepen.io/jaflo/pen/kLKEg */
export default {
  name: "test",
  props: ["title", "author"],
}
</script>

<style>
.note {
  font-size: 16px;
  line-height: 22px;
  background: #f8f1c6;
  background: linear-gradient(#f8f1c6 0%, #f8f1c6 96%, #cfceab 100%);
  background-size: 1px 22px;
  border-radius: 3px;
  border: 1px solid #C4C296;
  color: #878260;
  text-shadow: 0 1px 1px white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1),
  inset 0 1px 1px rgba(255, 255, 255, 0.8);
  max-width: 600px;
  margin: 20px auto;
}

.note>i {
  display: block;
  width: 0;
  height: 0;
  border: 15px solid transparent;
  border-bottom-color: #f8f1c6;
  position: absolute;
  margin-top: -30px;
  margin-left: 200px;
}

.note>b {
  display: block;
  width: 0;
  height: 0;
  border: 15px solid transparent;
  border-bottom-color: #C4C296;
  position: absolute;
  margin-top: -31px;
  margin-left: 200px;
}

.note>div {
  margin-left: 3px;
  background: radial-gradient(#edf1f9 30%, transparent 31%) 0 0,
  radial-gradient(rgba(0, 0, 0, 0.8) 30%, transparent 35%) 0 0px;
  background-size: 40px 40px;
  background-repeat: repeat-y;
}

.note>div>div {
  margin-left: 40px;
}
</style>
