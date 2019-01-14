<template>
<div class="speccitation">
  <blockquote :cite="name">
    {{content}}
  </blockquote>
</div>
</template>

<script>
export default {
  props: ["content", "name"],
}
</script>

<style>
/* codepen demo:
 * https://codepen.io/bbodine1/pen/nLsAk
 * https://codepen.io/harmputman/pen/IpAnb
 */
 .speccitation blockquote {
   display: block;
   border-width: 2px 0;
   border-style: solid;
   border-color: #48CFAD;
   padding: 1.5em 0 0.5em;
   margin: 1.5em 0;
   position: relative;
   color: #001A57;
 }
 .speccitation blockquote:before {
   content: '\201C';
   position: absolute;
   top: 0em;
   left: 50%;
   transform: translate(-50%, -50%);
   background: #fff;
   width: 3rem;
   height: 2rem;
   font: 6em/1.08em 'PT Sans', sans-serif;
   color: #48CFAD;
   text-align: center;
 }
 .speccitation blockquote:after {
   content: "\2013 \2003" attr(cite);
   display: block;
   text-align: right;
   font-size: 0.875em;
   color: #37BC9B;
 }

</style>
